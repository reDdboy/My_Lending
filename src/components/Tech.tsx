const technologies = [
    {
        icon: "text",
        title: "text",
        description: "text"
    },
    {
        icon: "text",
        title: "text",
        description: "text"
    },
    {
        icon: "text",
        title: "text",
        description: "text"
    },
    {
        icon: "text",
        title: "text",
        description: "text"
    }
]

function Tech() {
    return (
        <section id="tech" className="py-20 bg-gray-40 block:md-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Технологии в моих проектах
                    </h2>
                    <span className="bg-gradient">Text</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologies.map((feature, index) => (
                            <div
                                key={index}
                                className="display:flex justify-content:center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-blue-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-gray-900 text-xl">
                                    {feature.title}
                                </h3>
                                <p className="font-semibold text-gray-600 mb-3">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Tech
