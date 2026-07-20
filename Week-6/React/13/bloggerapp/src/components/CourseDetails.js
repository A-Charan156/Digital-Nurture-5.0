import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/20201' }
  ];

  if (!courses || courses.length === 0) {
    return <div>No courses available.</div>;
  }

  return (
    <div style={{ flex: 1, padding: '20px', textAlign: 'left', paddingLeft: '50px' }}>
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id} style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1.8em', marginBottom: '15px' }}>{course.name}</h3>
          <p style={{ fontWeight: 'bold', fontSize: '1em' }}>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
