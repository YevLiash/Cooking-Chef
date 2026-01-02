function ModalExist({onClose}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="border-[#90AB8B] bg-[#E9EEE7] rounded-2xl p-6 min-w-[280px]">
        <h2 className="mb-4 text-center">
          This grocery is already in your list...
        </h2>

        <button
          onClick={onClose}
          className="block mx-auto border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-6 py-2"
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default ModalExist
