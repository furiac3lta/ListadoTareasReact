import React from "react";
import {
  Header,
  Icon,
  Grid,
  GridColumn,
  Segment,
  Label,
  Button
} from "semantic-ui-react";

export default function Task(props) {
  const { task, deleteTask } = props;
  const { idTask, taskName, categoryTask } = task;

  return (
    <GridColumn width={8} className="task-container">
    <Segment>
    {categoryTask && (
        <Label color="teal" ribbon="right">
          {categoryTask}
        </Label>
      )}
      <Header as="h3" className="header-task">
        {taskName}
      </Header>
      <Header as="h5">{idTask}</Header>
      <Grid centered columns={2}>
        <GridColumn>
          <Button color="red" onClick={() => deleteTask(idTask)}>
            <Icon name="remove circle" /> Eliminar
             </Button>
        </GridColumn>
      </Grid>
    </Segment>
    </GridColumn>
  );
}
