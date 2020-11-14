    // theme handling
    if (window.theme.palette) {
      console.log("set theme")
      item.color = window.theme.palette[i]
    } else {
      item.color = data.resultSet.color.palette[i];
      if (i==0) {item.color = data.resultSet.color.accent; }
    }