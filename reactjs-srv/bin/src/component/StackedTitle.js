
function StackedTitle(props) {
  const title = props.title;
  const hold = title.split(" ");
  var x = '';
  for(var i=0;i<hold.length+1;i++)
  {
    if(i === 0) x = hold[0];
    else if(i === 1) x += ';';
    else if(i === 2) x += ' ' + hold[1] + ' ';
    else if(i === 3) x += hold[2] + ';';
    else if(i === 4) x += ' ' + hold[3] + ' ';
    else if(i === 5) x += hold[4] + ' ';
    else if(i === 6) x += hold[5] + ';';
    else if(i === 7) x += ' ' + hold[6] + ' ';
    else if(i === 8) x += hold[7] + ' ';
    else if(i === 9) x += hold[8] + ' ';
    else if(i === 10) x += hold[9] + ';';
  }
  const f = x.split(";");
  return (
    f.map((value, index) =>
      (
       <div>{value}</div>
     ))
  );
}
  
export default StackedTitle;