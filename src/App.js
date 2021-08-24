import "./styles.css";
import Button from "./Components/Button";

export default function App() {
  const data = {
    "Motivated 🔥": [
      {
        song: "Superhereos",
        createdBy: "The Script"
      },
      {
        song: "Thunder",
        createdBy: "Imagine Dragons"
      },
      {
        song: "Lakshya",
        createdBy: "Shankar Mahadevan, Shankar Ehsaan Loy"
      },
      {
        song: "Believer",
        createdBy: "Imagine Dragons"
      },
      {
        song: "Hall of Fame",
        createdBy: "The Script"
      }
    ],
    "At peace ✨": [
      {
        song: "Ilahi",
        createdBy: "Pritam, Arijit Singh"
      },
      {
        song: "The Lazy Song",
        createdBy: "Bruno Mars"
      },
      {
        song: "In Dino",
        createdBy: "Pritam, Soham Chakraborthy"
      }
    ],
    "Melancholy 😔": [
      {
        song: "The Night We Met",
        createdBy: "Lord Huron"
      },
      {
        song: "If the World Was Ending",
        createdBy: "Julia Michaels, JP Saxe"
      },
      {
        song: "See You Again (feat. Charlie Puth)",
        createdBy: "Wiz Khalifa, Charlie Puth"
      }
    ],
    "Coding 💻": [
      {
        song: "chill lofi beats to code/relax to",
        createdBy: "JomaTech"
      },
      {
        song: "lofi hip hop radio - beats to relax/study to",
        createdBy: "Lofi Girl"
      },
      {
        song:
          "Super Intelligence: 🍎 Memory Music, Improve Memory and Concentration, Binaural Beats Focus Music",
        createdBy: "Greenred Productions - Relaxing Music"
      }
    ]
  };

  const moods = Object.keys(data);

  const showMusic = (mood) => {
    const music = data[mood];
    console.log(music);
  };

  return (
    <div className="App">
      <h1>🎵 musictaste</h1>
      <h3>
        What I listen to for different moods! Select a mood to get started
      </h3>
      <div style={{ display: "flex" }}>
        {moods.map((mood) => {
          return <Button text={mood} clickHandler={() => showMusic(mood)} />;
        })}
      </div>
    </div>
  );
}
