function sumIntervals(intervals) {
    //TODO
    console.log("Intervals:")
    console.log(intervals)
    let Collective = [intervals[0]]
    for (let i = 1; i < intervals.length;i++)
    {
      let HasAdded = false
      for (let x = 0; x < Collective.length;x++)
      {
        if (isIn(Collective[x],intervals[i][0]) || isIn(Collective[x],intervals[i][1]) ) 
        {
          Collective[x] = [Min(Collective[x][0],intervals[i][0]),Max(Collective[x][1],intervals[i][1])]
          HasAdded = true;
          break;
        }
        
          
      }
      if (!HasAdded)
      {
        Collective.push(intervals[i])
      }
    }
    let Total = 0;
    Collective.forEach(function(e){
      Total += e[1] - e[0]
    })
    console.log("Collective:")
    console.log(Collective)
    checkOverLaps(Collective)
    return Total
  }
  
  function isIn(Arr,Val)
  {
    return (Arr[0] <= Val) && (Val <= Arr[1])
  }
  
  function Min(a,b)
  {
    return (a>b)?b:a
  }
  function Max(a,b)
  {
    return (a>b)?a:b
  }
  
  
  function checkOverLaps(Collective)
  {
    console.log(Collective)
    for (let i = Collective.length-1;i >=0;i--)
    {
      for (let x = 0; x < Collective.length;x++)
        if (Collective[i][1] > Collective[x][0])
        {
          Collective[x] = [Min(Collective[i][0],Collective[x][0]),Max(Collective[i][1],Collective[x][1])]
          if (i == Collective.lenght-1)
            Collective.pop()
          else
          {
            console.log(`Collective.splice(${i},1), ${Collective}`)
            Collective = Collective.splice(i,1)
          }
            
          break;
        }
    }
    return Collective
  }