import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col p-4 h-full overflow-y-auto bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Página Inicial</h1>

            <RepeatedParagraphs times={20} />
        </div>
    );
};

export default Home;



const Paragraph: React.FC = () => {
    return (
        <p className="my-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec dolor lacinia dignissim bibendum varius. Mauris ac tempor tortor.
        </p>
    );
};

const RepeatedParagraphs: React.FC<{ times: number }> = ({ times }) => {
    const paragraphs = [];
    for (let i = 0; i < times; i++) {
        paragraphs.push(<Paragraph key={i} />);
    }
    return <div>{paragraphs}</div>;
};