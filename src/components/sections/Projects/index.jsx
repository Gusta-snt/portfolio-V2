import projectLogo from './../../../assets/logo.svg'

function Projects() {
	return (
		<section className="h-[100vh] flex flex-col items-center justify-center gap-[80px]">
			<h2 className="font-bold text-6xl"><span id="underline-text">P</span>rojects</h2>
			<article className="h-[62%] w-[20%] border-2 border-white border-solid rounded-[5%] flex flex-col items-center gap-[30px]">
				<img src={projectLogo} className="mt-[10px] w-[25%]"/>
				<div className="w-[85%] flex justify-between">
					<p className="w-[48%] text-base">My principal site were you can know me better or have a first contact with my projects.</p>
					<p className="w-[40%] mt-[5px] text-left text-xs">Tecnologies: 
						<ul className="ml-[20px] text-left list-disc">
							<li>ViteJS</li>
							<li>ReactJS</li>
							<li>TailwindCSS</li>
						</ul>
					</p>
				</div>
			</article>
		</section>
	)
}

export default Projects