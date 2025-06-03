import { useState } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const cancelTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <main>
    
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heading}>Todo-List</h1>
          <p style={styles.subheading}>
            This is a Todo List where you can add , delete tasks<br />
          </p>
        </div>
      </div>

  
      <section style={styles.infoSection}>
        <h2 style={styles.infoHeading}>Finish tasks and earn rewards!</h2>
      </section>

     
      <section style={styles.taskSection}>
        <div style={styles.taskCard}>
          <p style={styles.taskPrompt}>Enter the tasks to focus on for today 🙂</p>

          <label style={styles.label}>Task</label>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What to-do today??"
            style={styles.input}
          />

          <button onClick={addTask} style={styles.addButton}>Add Task</button>

         
          {tasks.length > 0 && (
            <div style={styles.taskList}>
              <h3 style={styles.taskTitle}>Today's Tasks</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                  <li key={index} style={styles.taskItem}>
                    <span
                      style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        flex: 1,
                      }}
                    >
                      {task.text}
                    </span>
                    <div style={styles.taskButtons}>
                      <button
                        style={{
                          ...styles.checkButton,
                          backgroundColor: task.completed ? "#38a169" : "#3182ce",
                        }}
                        onClick={() => {
                          const updatedTasks = [...tasks];
                          updatedTasks[index].completed = !updatedTasks[index].completed;
                          setTasks(updatedTasks);
                        }}
                      >
                        ✔
                      </button>
                      <button onClick={() => cancelTask(index)} style={styles.cancelButton}>✖</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

    
      <section style={styles.rewardSection}>
        <div style={styles.rewardCard}>
          <div style={styles.rewardIcon}>🏅</div>
          <h6 style={styles.rewardTitle}>Get Rewards</h6>
          <p style={styles.rewardText}>Earn rewards for staying focused and striking off your tasks.</p>
        </div>
      </section>
    </main>
  );
}
const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '75vh',
    backgroundImage: "url('https://images.unsplash.com/photo-1678846851706-abb02d1574aa?q=80&w=1974')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  heroContent: {
    position: 'relative',
    padding: '2rem',
    zIndex: 1,
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.25rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  infoSection: {
    backgroundColor: '#1e293b',
    padding: '3rem 1rem',
    textAlign: 'center',
  },
  infoHeading: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  taskSection: {
    padding: '4rem 1rem',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    justifyContent: 'center',
  },
  taskCard: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  taskPrompt: {
    marginBottom: '1rem',
    color: '#334155',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#475569',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
  },
  addButton: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
  taskList: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
  },
  taskTitle: {
    fontWeight: '700',
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#1e293b',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    marginBottom: '0.75rem',
    border: '1px solid #e2e8f0',
  },
  taskButtons: {
    display: 'flex',
    gap: '0.5rem',
  },
  checkButton: {
    backgroundColor: '#22c55e',
    color: '#ffffff',
    padding: '0.4rem 1rem',
    fontSize: '0.875rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    padding: '0.4rem 1rem',
    fontSize: '0.875rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
  rewardSection: {
    backgroundColor: '#1e293b',
    padding: '3rem 1rem',
    textAlign: 'center',
    color: '#ffffff',
  },
  rewardCard: {
    maxWidth: '300px',
    margin: '0 auto',
  },
  rewardIcon: {
    width: '48px',
    height: '48px',
    fontSize: '1.5rem',
    margin: '0 auto 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#1e293b',
    borderRadius: '50%',
  },
  rewardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    fontWeight: '700',
  },
  rewardText: {
    fontSize: '1rem',
    color: '#cbd5e1',
  },
}; 




