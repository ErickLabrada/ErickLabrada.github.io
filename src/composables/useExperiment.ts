import { ref, computed, onMounted } from 'vue'
import { apiService } from '@/services/api'
import type { FormDto } from '@/types/forms'

export function useExperiment() {
  const started = ref(false)
  const loading = ref(false)
  const submitting = ref(false)
  const error = ref('')

  const forms = ref<FormDto[]>([])
  const currentStep = ref(0)

  const answers = ref<Record<string, any>>({})
  const errors = ref<Record<string, string>>({})

  const currentForm = computed(
    () => forms.value[currentStep.value] || null
  )

  const progressPercentage = computed(() => {
    if (!forms.value.length) return 0
    return ((currentStep.value + 1) / forms.value.length) * 100
  })

  const loadForms = async () => {
    loading.value = true
    error.value = ''

    try {
      const response = await apiService.getForms()

      forms.value = response.data.sort(
        (a, b) => a.display_order - b.display_order
      )
    } catch (err) {
      console.error(err)
      error.value = 'Failed to load forms.'
    } finally {
      loading.value = false
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isEmpty = (value: any) =>
    value === undefined ||
    value === null ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)

  const validateCurrentForm = () => {
    if (!currentForm.value) return true

    let valid = true

    // clear previous errors properly
    for (const q of currentForm.value.questions || []) {
      delete errors.value[q.id]
    }

    for (const q of currentForm.value.questions || []) {
      const value = answers.value[q.id]

      if (q.is_required && isEmpty(value)) {
        errors.value[q.id] = 'This field is required'
        valid = false
      }
    }

    return valid
  }

  const nextStep = () => {
    if (!validateCurrentForm()) {
      scrollToTop()
      return
    }

    if (currentStep.value < forms.value.length - 1) {
      currentStep.value++
      scrollToTop()
    }
  }

  const previousStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--
      scrollToTop()
    }
  }

  const validateAllForms = () => {
    let valid = true
    errors.value = {}

    for (const form of forms.value) {
      for (const q of form.questions || []) {
        const value = answers.value[q.id]

        if (q.is_required && isEmpty(value)) {
          errors.value[q.id] = 'This field is required'
          valid = false
        }
      }
    }

    return valid
  }

  const submitForm = async () => {
    if (!validateAllForms()) {
      scrollToTop()
      return
    }

    submitting.value = true
    error.value = ''

    try {
      const payload = {
        answers: forms.value.flatMap((form) =>
          (form.questions || []).map((question) => {
            const value = answers.value[question.id]

            const isChoice =
              question.question_type === 'single_choice' ||
              question.question_type === 'multiple_choice'

            return {
              question_slug: question.slug,
              answer_text: isChoice ? undefined : value,
              selected_option_value: isChoice ? value : undefined
            }
          })
        )
      }

      await apiService.submitResponse(payload)
      window.location.href = '/thanks'
    } catch (err) {
      console.error(err)
      error.value = 'Failed to submit response.'
    } finally {
      submitting.value = false
    }
  }

  onMounted(loadForms)

  return {
    started,
    loading,
    submitting,
    error,

    forms,
    currentForm,
    currentStep,

    answers,
    errors,

    progressPercentage,

    loadForms,
    nextStep,
    previousStep,
    submitForm
  }
}