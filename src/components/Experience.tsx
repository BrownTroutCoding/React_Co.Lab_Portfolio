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
            title: "Remotasks | AI Trainer",
            date: "12/2023 - current"
        },
        {
            title: "Co.Lab | Lead Backend Developer for 'Yeonjii'",
            date: "11/2023 - current"
        },

        {
            title: "Residential and Commercial Real Estate Agent",
            date: "05/2018 - 08/2023"
        }
    ];

    return (
        <section className="p-6 rounded flex flex-col items-center">
            <div id="experience" className="box space-y-4 w-full max-w-3xl rounded border border-black">
                <h1 className="text-4xl mb-5 mt-8 flex justify-center font-serif">Education</h1>
                {educationData.map((data, idx) => (
                    <Card key={idx} type="Education" {...data} />
                ))}
                <h1 className="text-4xl mb-5 mt-8 flex justify-center font-serif">Experience</h1>
                {experienceData.map((data, idx) => (
                    <Card key={idx} type="Experience" {...data} />
                ))}
                <div style={{ marginBottom: '2rem' }}></div>
            </div>
        </section>
    );

}