import React from 'react';
import { usePageInfo } from '../../hooks/page-info.hook';
import { Nav } from './nav.component';

export const Container: React.FC = ({ children }) => {
    const { heading } = usePageInfo();

    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className="bg-red-700 pb-32">
                    <Nav />
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl leading-9 font-bold text-gray-100">{heading}</h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">{children}</div>
                    </div>
                </main>
            </div>
        </>
    );
};
