import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

function Datepicker() {
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd,MMMM yy"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default Datepicker
