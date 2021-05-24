import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

function Popup() {
  const [adult, setAdult] = useState(2)
  const [adultdisabled, setAdultdisabled] = useState(false)

  const [children, setChildren] = useState(0)
  const [childrendisabled, setChildrendisabled] = useState(false)

  const [room, setRoom] = useState(1)
  const [roomdisabled, setRoomdisabled] = useState(false)

  useEffect(() => {
    if (adult == 1) {
      setAdultdisabled(!adultdisabled)
    } else {
      setAdultdisabled(false)
    }
  }, [adult])

  useEffect(() => {
    if (children == 0) {
      setChildrendisabled(!childrendisabled)
    } else {
      setChildrendisabled(false)
    }
  }, [children])

  useEffect(() => {
    if (room == 1) {
      setRoomdisabled(!roomdisabled)
    } else {
      setRoomdisabled(false)
    }
  }, [room])

  //popup features
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className="container">
      <Button
        aria-describedby={id}
        onClick={handleClick}
        style={{
          backgroundColor: 'white',
          padding: '0 2rem'
        }}
        className="popup-button"
      >
        {adult} adults . {children} children . {room} room
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        style={{ marginTop: '1.5rem', marginLeft: '1.1rem' }}
      >
        <Typography className={classes.typography}>
          <div className="bui-steppers">
            <div className="bui-stepper">
              <span className="bui-stepper-title">Adults</span>
              <div className="bui-stepper-buttons">
                <button
                  onClick={() => setAdult(adult - 1)}
                  disabled={adultdisabled}
                  className="bui-stepper-button"
                >
                  -
                </button>
                <span className="bui-stepper-display">{adult}</span>
                <button
                  onClick={() => setAdult(adult + 1)}
                  className="bui-stepper-button"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bui-stepper">
              <div>
                <span className="bui-stepper-title">Children</span>
                <span className="bui-stepper-title2">Ages 0 – 17</span>
              </div>
              <div className="bui-stepper-buttons">
                <button
                  onClick={() => setChildren(children - 1)}
                  disabled={childrendisabled}
                  className="bui-stepper-button"
                >
                  -
                </button>
                <span className="bui-stepper-display">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="bui-stepper-button"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bui-stepper">
              <span className="bui-stepper-title">Rooms</span>
              <div className="bui-stepper-buttons">
                <button
                  onClick={() => setRoom(room - 1)}
                  disabled={roomdisabled}
                  className="bui-stepper-button"
                >
                  -
                </button>
                <span className="bui-stepper-display">{room}</span>
                <button
                  onClick={() => setRoom(room + 1)}
                  className="bui-stepper-button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  )
}

export default Popup
