import * as React from 'react';
import { BackendDeveloper } from '../../data/developer-paths';
import { usePageInfo } from '../../hooks/page-info.hook';
import { useEffect } from 'react';
import { KnowledgeStep } from '../../components/knowledge-step.component';
import { Tabs } from '../../components/tabs.component';

const BackendDeveloperPage = () => {
    const data = BackendDeveloper;
    const { setHeading } = usePageInfo();

    useEffect(() => {
        setHeading(data.name);
    });

    return (
        <>
            <Tabs />
            <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <KnowledgeStep step={data.steps[0]} />
                <KnowledgeStep step={data.steps[0]} />
                <KnowledgeStep step={data.steps[0]} />
                <KnowledgeStep step={data.steps[0]} />
                <KnowledgeStep step={data.steps[0]} />
                <KnowledgeStep step={data.steps[0]} />
            </ul>
        </>
    );
};

export default BackendDeveloperPage;
