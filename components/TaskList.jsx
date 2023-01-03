import { TaskItem } from "./TaskItem"


export const TaskList = (props) => {
  const {state, currentCategory, onlyCompleted} = props
  const currentList = state[currentCategory]
  let taskList

  if(onlyCompleted && currentList) {
    taskList = currentList.todo_tasks.filter(({completed}) => Boolean(completed))  
  }else{
    taskList = currentList.todo_tasks
  }

  return (
    <div className="max-h-[80vh] overflow-x-scroll">
    {currentList ? (
      taskList.map((task) => (
        <TaskItem key={task.id} task={task}></TaskItem>
      ))
    ) : (
      <h2> There is no task for this todo! Create one c:</h2>
    )}
    </div>)
}

