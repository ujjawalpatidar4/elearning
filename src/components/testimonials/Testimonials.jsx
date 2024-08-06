import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Ujjawal Patidar",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th/id/OIP.V1B9WqS3FVLw830FIUUA7gHaE7?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Ujjawal Patidar",
      position: "Teacher",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.4DIj4sEdPjQF5_vt9Ju7agHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Ujjawal Patidar",
      position: "Lawyer",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
        image:
        "https://th.bing.com/th/id/OIP.Dbk-5WFq7oTTfgfn8tsX7gHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Ujjawal Patidar",
      position: "Doctor",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://i.pinimg.com/originals/15/0b/82/150b82c6034eee1b5390af4e264c67a8.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;