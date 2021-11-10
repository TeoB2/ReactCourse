import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {

  const httpData = useHttp();

  const { isLoading, error, sendRequest: sendTaskRequest } = httpData;


  const enterTaskHandler = async (taskText) => {

    const createTask = (taskText, taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  };

    sendTaskRequest({
      url: 'https://react-course-http-request-default-rtdb.europe-west1.firebasedatabase.app/task.json', 
      method: 'POST', 
      body: { text: taskText }, 
      headers: {'Content-Type': 'application/json',}
    }, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
