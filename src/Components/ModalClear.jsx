function ModalClear({onClose, onClear}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative border-[#90AB8B] bg-[#E9EEE7] rounded-2xl p-6 min-w-[280px]">
        <div className="flex absolute right-3 top-1">
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-800 ml-auto text-xl"
          >
            x
          </button>
        </div>
        <h2 className="my-4 text-center">
          Are you sure that you want to clear your grocery list?
        </h2>
        <div className="flex justify-center gap-10">
          <button
            onClick={onClear}
            className="cursor-pointer border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-orange-300/30 hover:border-orange-600 hover:text-orange-800 transition rounded-full px-6 py-2"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-6 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalClear