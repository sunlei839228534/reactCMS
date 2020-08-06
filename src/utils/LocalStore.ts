const store = window.localStorage

class localStorage { 
  public static set(key:string,value:any) {
    if(!store) {
      return 
    }
    try {
      let v = value
      if(typeof value === 'object') {
        v = JSON.stringify(v)
        store.setItem(key,v)
      }else {
        store.setItem(key,v)
      }
    }catch(error) {

    }
  }

  public static get (key: string) {
    if(!store) {
      return 
    }
    try {
      return store.getItem(key)
    } catch(error) {

    }
  }

  public static get2Json(key: string) {
    if(!store) {
      return 
    }
    const data = store.getItem(key)
    if(data) {
      try {
        return JSON.parse(data)
      }catch(error) {

      }
    }
    return null
  }

  public static remove (key: string) {
    if(!store) {
      return 
    }
    try {
      store.removeItem(key)
    }catch(error) {

    }
  }
}

export default localStorage