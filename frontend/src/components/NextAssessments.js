import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function NextAssessments({ assessments }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Next Assessments</Typography>

        <List component="nav">
          {assessments.map(assessment => (
            <ListItem key={assessment} button>
              <ListItemText primary={assessment} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default NextAssessments
