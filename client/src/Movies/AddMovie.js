import React,{useState,useEffect} from "react"
import axios from 'axios';

// export default function UpdateMovie(props) {
//     console.log(props);
  
//     let id = props.match.params.id;
//     console.log("id", id);
  
//     const [movie, setMovie] = useState({
//       title: "",
//       director: "",
//       metascore: "",
//       stars: []
//     });
  
//     useEffect(() => {
//       axios
//         .get(`http://localhost:5000/api/movies/${id}`)
//         .then(res => setMovie(res.data))
//         .catch(err => console.log(err.response));
//     }, []);
  
//     const handleChange = e => {
//       setMovie({
//         ...movie,
//         [e.target.name]: e.target.value
//       });
//     };
  
//     const handleStars = (value, id) => {
//       const changedStar = movie.stars.map((star, i) =>
//         i === id? value : star
//       );
//       setMovie({ ...movie, stars: changedStar });
//     };
  
//     const movieUpdate = e => {
//       e.preventDefault();
//       axios
//         .put(`http://localhost:5000/api/movies/${id}`, movie)
//         .then(res => {
//           console.log(res);
//           setMovie(res.data);
//           props.history.push(`/movies/${id}`);
//         })
//         .catch(error => console.error(error));
//     };
  
//     return (
//       <div>
//         <h2>{movie.title}</h2>
//         <form onSubmit={movieUpdate}>
//           <label>Title: </label>
//           <input
//             type="text"
//             name="title"
//             placeholder={movie.title}
//             value={movie.title}
//             onChange={handleChange}
//           />
//           <label>Director: </label>
//           <input
//             type="text"
//             name="director"
//             placeholder={movie.director}
//             value={movie.director}
//             onChange={handleChange}
//           />
//           <label>Metascore: </label>
//           <input
//             type="number"
//             name="metascore"
//             placeholder={movie.metascore}
//             value={movie.metascore}
//             onChange={handleChange}
//           />
//           <label>Stars: </label>
//           {movie.stars.map((star, index) => {
//             return (
//               <input
//                 type="text"
//                 name="stars"
//                 value={star}
//                 onChange={event => handleStars(event.target.value, index)}
//               />
//             );
//           })}
//           <button>Add {movie.title}</button>
//         </form>
//       </div>
//     );
//   }
  
  

export default function AddMovie(props) {
  const [form, setForm] = useState({
    title: "",
    director: "",
    metascore: 0,
    stars: []
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]:
        event.target.name === "stars"
          ? event.target.value.split(",")
          : event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, form)
      .then(response => {
        debugger;
      })
      .catch(error => {
        console.error(error);
      });
    props.history.push(`/`);
  }
  return (
    <form onSubmit={handleSubmit} className="update-form">
      <label>
        Title
        <input
          value={form.title}
          onChange={handleChange}
          name="title"
          type="text"
        />
      </label>
      <label>
        Director
        <input
          value={form.director}
          onChange={handleChange}
          name="director"
          type="text"
        />
      </label>
      <label>
        Metascore
        <input
          value={form.metascore}
          onChange={handleChange}
          name="metascore"
          type="number"
        />
      </label>
      <label>
        Stars
        <input
          value={form.stars.join(",")}
          onChange={handleChange}
          name="stars"
          type="text"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}