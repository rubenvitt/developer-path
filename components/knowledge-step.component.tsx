import React from 'react';
import { PathStep } from '../data/developer-paths';

export const KnowledgeStep: React.FC<{ step: PathStep }> = ({ step }) => {
    return (
        <>
            <li className="col-span-1 bg-white rounded-lg shadow-lg">
                <a>
                    <div className="w-full flex items-center justify-between pl-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">{step.name}</h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                                    Cool tag
                                </span>
                            </div>
                            <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
                                Regional Paradigm Technician
                            </p>
                        </div>
                        <img
                            className="h-20 bg-gray-300 rounded-b-none rounded-lg flex-shrink-0"
                            src={step.img}
                            alt=""
                        />
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="-mt-px flex">
                            <div className="w-0 flex-1 flex border-r border-gray-200">
                                <a
                                    href="#"
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-blue-400 transition-colors transition duration-200 hover:text-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                >
                                    <p className={'w-5 h-5'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                            />
                                        </svg>
                                    </p>
                                    <span className="ml-3">Resources</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a
                                    href="#"
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-green-500 hover:text-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                >
                                    <p className={'w-5 h-5'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </p>
                                    <span className="ml-3">Done</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </>
    );
};
