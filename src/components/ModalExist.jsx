import {useEffect} from 'react'
import {IoIosClose} from 'react-icons/io'

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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative border-accent bg-primary rounded-lg p-6 min-w-[280px]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex absolute right-2 top-1">
          <button
            onClick={onClose}
            className="cursor-pointer "
          >
            <IoIosClose className="text-2xl text-gray-700" />
          </button>
        </div>
        <h2 className="my-4 text-center">
          {children}
        </h2>

        <button
          onClick={onClose}
          className="cursor-pointer block mx-auto border border-accent/50 text-gray-800 hover:border-action  hover:bg-action hover:text-white transition rounded-lg px-6 py-2"
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default ModalExist
