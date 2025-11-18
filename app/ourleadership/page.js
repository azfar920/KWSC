"use client";
import React from "react";
import Image from "next/image";

export default function Leadership() {
  const pastLeaders = [
    {
      name: "Engr. Syed Najib Ahmed",
      role: "Former Managing Director",
      period: "2022 - 2023",
      img: "/leaders/najib.jpg",
    },
    {
      name: "Asadullah Khan",
      role: "Former Managing Director",
      period: "2020 - 2022",
      img: "/leaders/asadullah.jpg",
    },
    {
      name: "Hashim Raza Zaidi",
      role: "Former Managing Director",
      period: "2018 - 2020",
      img: "/leaders/hashim.jpg",
    },
  ];

  const managementTeam = [
    {
      name: "Ahmed Ali Siddiqui",
      role: "Managing Director",
      img: "/leaders/salahuddin.jpg",
    },
    {
      name: "Asadullah Khan",
      role: "Chief Operating Officer",
      img: "/leaders/imran.jpg",
    },
    {
      name: "Muhammad Ali Sheikh",
      role: "Chief Engineer Water Supply",
      img: "/leaders/sarah.jpg",
    },
    {
      name: "Aftab Alam Chandio",
      role: "Chief Engineer Sewerage",
      img: "/leaders/bilal.jpg",
    },
  ];

  return (
    <>
      {/* HERO SECTION FROM SERVICES PAGE */}
      <section
        className="relative h-screen transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover text-white flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">Our Leadership</h2>
            <p className="mt-6 text-[3.5vh]">
              Meet the visionaries guiding Karachi Water & Sewerage Corporation (KW&SC)
              toward a sustainable and efficient future.
            </p>
          </div>
        </div>
      </section>

      {/* BODY WITH LEADERSHIP CONTENT */}
      <div className="w-full py-16 mt-20">
        <div className="text-gray-900 max-w-[90%] mx-auto">
          <header className="text-center mb-20">
            <h1 className="text-4xl font-bold mb-4">Leadership & Management</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              KW&SC has evolved under the guidance of exceptional leaders who have contributed
              to the organization's growth. Meet our current management team and past leaders.
            </p>
          </header>

          {/* CURRENT MANAGEMENT TEAM */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Current Management Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {managementTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-full h-48 relative mb-4">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PAST LEADERS */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Past Leaders
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {pastLeaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-full h-48 relative mb-4">
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{leader.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* INTERACTIVE SECTION (REPLACING SWIPER) */}
          <section className="py-20">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Leadership Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Our Vision",
                  desc:
                    "A future where Karachi receives uninterrupted, clean, and safe water through modernized infrastructure and progressive leadership.",
                },
                {
                  title: "Our Mission",
                  desc:
                    "To provide efficient water supply and sewerage services through sustainable operations, innovative planning, and skilled leadership.",
                },
                {
                  title: "Core Values",
                  desc:
                    "Transparency, accountability, innovation, and public service form the foundation of KW&SC’s leadership principles.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
