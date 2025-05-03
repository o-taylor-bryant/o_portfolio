import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-black after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">July 2022 - Present | Remote</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							TELUS Digital
						</h3>
						<h4 className=" font-light text-md mb-4">
							Web Search Evaluator | Part-time
						</h4>
						<div className="text-justify">
							<ul className="list-disc pl-5 space-y-4">
								<li>
									 ⌟ Independently evaluated AI-generated responses and web search results for clarity and compliance, supporting system accuracy and user satisfaction.
								</li>
								<li>
									 ⌟ Adapted to evolving content guidelines through self-guided learning, providing consistent reviews across varied tasks and deadlines.
								</li>
								<li>
									 ⌟ Delivered structured quality reports using internal tools, contributing technical judgment to inform system improvement.
								</li>
								<li>
									 ⌟ Maintained high performance under tight deadlines and limited oversight, showing reliability and ownership in a high-autonomy role for a consistent workflow.
								</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Windows
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Google Workspace
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								AI Evaluation
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Autonomous
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">September 2017 - August 2020 | Beulaville, NC</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Walgreens
						</h3>
						<h4 className="font-light text-md mb-4">
							Customer Service Associate
						</h4>
						<div className="text-justify">
							<ul className="list-disc pl-5 space-y-4">
								<li>
								 ⌟ Led weekly discussions on Customer Experience Metrics (CE Scores), using communication and initiative to drive improvements in customer satisfaction and survey engagement.
								</li>
								<li>
								 ⌟ Operated a point-of-sale system during high-volume hours, helping maintain excellent wait times and customer flow with each transaction.
								</li>
								<li>
								 ⌟ Collaborated with pharmacy and photo departments to fulfill regulated requests, contributing to cross-departmental efficiency and timely support.
								</li>
								<li>
								 ⌟ Used an in-store inventory device to assist with restocking and stock-level accuracy, supporting product availability and operational readiness.
								</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Customer Service
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Collaboration
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Calmness Under Pressure
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">August 2016 - April 2017 | Greensboro, NC</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							University of North Carolina at Greensboro
						</h3>
						<h4 className="font-light text-md mb-4">
							Lab Monitor - Student Success Center
						</h4>
						<div className="text-justify">
							<ul className="list-disc pl-5 space-y-4">
								<li>
								 ⌟ Provided steady, front-line support to students in a shared academic space, creating a reliable and welcoming learning environment.
								</li>
								<li>
								 ⌟ Maintained organization and resource availability, providing students with learning materials within the academic space.
								</li>
								<li>
								 ⌟ Tracked lab attendance through Excel-based systems, ensuring accurate reporting through attention to process and detail.
								</li>
								<li>
								 ⌟ Assisted academic staff with administrative tasks, reinforcing team coordination and contributing to the center’s student success mission.
								</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Google Workspace
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Technical Support
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Multitasking
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
