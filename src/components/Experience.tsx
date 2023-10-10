import Card from "./Card";

export default function Experience() {
    const educationData = [
        {
            title: "Coding Temple | Software Engineering Student",
            date: "05/2023"
        },

        {
            title: "Montana State University",
            date: "05/2018"
        }
    ];

    const experienceData = [
        {
            title: "Residential and Commercial Real Estate Agent",
            date: "05/2018 - 08/2023"
        },
        {
            title: "Independent Sign Contractor",
            date: "04/2021 - current"
        },

        {
            title: "Brokerage Intern",
            date: "09/2017"
        }
    ];

    return (
        <section className="p-6 rounded flex flex-col items-center">
            <div id="experience" className="box space-y-4 w-full max-w-3xl rounded border">
                <h1 className="text-4xl mb-4 mt-5 flex justify-center font-serif">Education</h1>
                {educationData.map((data, idx) => (
                    <Card key={idx} type="Education" {...data} />
                ))}
                <h1 className="text-4xl mb-4 mt-5 flex justify-center font-serif">Experience</h1>
                {experienceData.map((data, idx) => (
                    <Card key={idx} type="Experience" {...data} />
                ))}
                <h1 className="mt-5 flex justify-center font-serif"> </h1>
            </div>
        </section>
    );

}