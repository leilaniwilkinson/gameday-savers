import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TranslateIcon from '@mui/icons-material/Translate';
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { GlobalStyles } from '@mui/material';
import useDarkMode from 'use-dark-mode';
//import Toggle from './Toggle';

const actions = [
  { icon: <TextIncreaseIcon />, name: 'Enlarge', operation: 'enlarge' },
  //{ icon: <TranslateIcon />, name: 'Translate', operation: 'translate' },
  { icon: <LightbulbIcon />, name: 'Dark Mode', operation: 'darken' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fontSize, setFontSize] = React.useState(false);
  const darkMode = useDarkMode(true);
  //handler function
  function handleClick (e, operation){
    e.preventDefault();
    if ( operation=="enlarge" ){
      setFontSize(!fontSize);
    //} else if ( operation=="translate" ){
    //  alert("TRANSLATE");
    } else if ( operation=="darken" ) {
      //alert("Change Mode")
      darkMode.toggle()
      //darkMode.enable()
      
      
    }
    // setOpen(!open);// to close the speed dial, remove this line if not needed.
  };

  return (
    <div>
      <GlobalStyles
        styles={{
          h1: { fontSize: fontSize ? "3rem" : "" },
          h2: { fontSize: fontSize ? "2.5rem" : "" },
          h3: { fontSize: fontSize ? "2rem" : "" },
          h4: { fontSize: fontSize ? "1.6rem" : "" },
          p: { fontSize: fontSize ? "1.5rem" : "" },
          p1: { fontSize: fontSize ? "1.2rem" : "" },
          p2: { fontSize: fontSize ? "1.1rem" : "" },
          a: { fontSize: fontSize ? "1.5rem" : "1.1rem" },
          ul: { fontSize: fontSize ? "1.5rem" : "" },
          table: { fontSize: fontSize ? "1.5rem" : "" },
        }}
      />
      <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 16, right: 16 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Accessibility features"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<AccessibilityIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={(e) => {
                handleClick(e, action.operation)
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}