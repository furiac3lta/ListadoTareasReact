import React from 'react'
import { Header, Icon, Grid, GridRow} from "semantic-ui-react";
import Task from './Task';

export default function TaskContent(props) {
    const {tasks, deleteTask} = props;

    if(tasks.length === 0){
        return null
    }

  return (
    <Grid className='ui centered tasks-content'>
        <Header as="h2">
            <Icon name="settings" />
            Administra tus tareas
        </Header>
        <GridRow>
            {tasks.map((task, index)=>(
               <Task task={task} key={index} deleteTask={deleteTask}/>
            ))}
        </GridRow>
    </Grid>
  )
}
