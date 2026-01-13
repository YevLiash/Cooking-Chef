import {useEffect} from 'react'

function ModalExist({children, onClose}) {

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative border-[#90AB8B] bg-[#E9EEE7] rounded-2xl p-6 min-w-[280px]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex absolute right-4 top-1">
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-800 ml-auto text-xl"
          >
            x
          </button>
        </div>
        <h2 className="my-4 text-center">
          {children}
        </h2>

        <button
          onClick={onClose}
          className="cursor-pointer block mx-auto border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-6 py-2"
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default ModalExist
