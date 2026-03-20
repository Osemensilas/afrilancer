import Link from "next/link";

const ProjectDescription = () => {
    return ( 
        <>
        <section className="h-max min-h-[calc(100vh-100px)] w-full p-10 flex gap-3">
            <div className="h-max w-[70%]">
                <div className="">
                    <p>Duration: Less than a month</p>
                    <p>Budget: $200</p>
                </div>
                <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis consequatur vero repellat perferendis debitis ullam beatae laborum sed, sunt, aut inventore aliquam modi distinctio voluptatum non nostrum tempore numquam.</p>
                </div>
            </div>
            <div className="h-max w-[30%]">
                <h2 className="text-accent mb-10 text-xl">Project Unverified</h2>
                <div className="h-max w-full mb-10">
                    <div className="text-accent text-base">Your project is currently showing unverified. To get more people to trust and apply for the job, Pay the your budget for the job and get clients to apply for them. <Link href="/" className="text-primary underline">Learn More</Link></div>
                </div>
                <button type="button" className="p-2 bg-primary rounded text-accent">Pay Now</button>
            </div>
        </section>
        </>
     );
}
 
export default ProjectDescription;