'use client';

import { KnowledgesCard } from '@/constants';
import {  Award, Mic } from 'lucide-react';
// BookOpen,
export default function Knowledges() {
  return (
    <section id="knowledges" className="w-full bg-[#050111] px-6 py-16 flex flex-col items-center gap-12">
      <div className="w-full max-w-6xl text-center px-4 relative">
        <h2 className="text-amber-50 title text-2xl md:text-4xl font-bold mb-4">
          Saberes Estelares
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-base md:text-lg">
          Nesta seção, reunimos experiências vividas, artigos publicados e formações que fortalecem nossa trajetória com a Astronomia e a Educação.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {KnowledgesCard.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl p-[2px] overflow-hidden group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" />

              <div className="relative z-10 bg-[#0e0a1e]/90 backdrop-blur-md rounded-xl p-4 shadow-md shadow-purple-500/25 border border-purple-900/40 flex flex-col items-start h-full">
                
                {/* <span className="mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white tracking-wide shadow-md">
                  {{
                    article: 'Artigo Científico',
                    presentation: 'Apresentação',
                    course: 'Curso',
                  }[item.type]}
                </span> */}

                <img src={item.image} alt={item.title} className="w-full h-40 object-contain rounded-md bg-[#1a1127] mb-3"/>

                <h4 className="text-purple-100 title text-sm mb-1 leading-tight font-semibold"> {item.title} </h4>
                
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">{item.description}</p>

                <div className="mt-auto flex gap-6 md:gap-10 text-left w-full">
                  {/* {item.articleLink && (
                    <a
                      href={item.articleLink}
                      className="flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-100 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BookOpen size={16} /> Ler artigo
                    </a>
                  )} */}
                  {item.institutionalLink && (
                    <a
                      href={item.institutionalLink}
                      className="flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-100 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Mic size={16} /> Saiba mais
                    </a>
                  )}
                  {item.certificateLink && (
                    <a
                      href={item.certificateLink}
                      className="flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-100 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Award size={16} /> Ver certificado
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
