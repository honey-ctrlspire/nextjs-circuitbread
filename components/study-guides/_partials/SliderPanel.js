import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SliderPanel({ openSlider, setOpenSlider }) {
	const [open, setOpen] = useState(true)

	return (
		<Transition.Root show={openSlider} as={Fragment}>
			<Dialog as="div" static className="fixed inset-0 overflow-hidden" open={openSlider} onClose={setOpenSlider}>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-y-0 -left-0 pl-10x max-w-full flex">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="translate-x-0"
							enterTo="translate-x-full"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<div className="relative w-screen max-w-mdx">
								<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
									<div className="px-4 sm:px-6">
										<Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>

										<button
											className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											onClick={() => setOpenSlider(false)}
										>
											<span className="sr-only">Close panel</span>
											<img src="/img/common/icon-close.svg" style={{ width: '14px', height: '14px' }} />
										</button>
									</div>
									<div className="mt-6 relative flex-1 px-4 sm:px-6">
										{/* Replace with your content */}
										<div className="absolute inset-0 px-4 sm:px-6">
											<div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
										</div>
										{/* /End replace */}
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
