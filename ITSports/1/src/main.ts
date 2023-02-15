import fetch from 'node-fetch'

interface ResData {
  userID: number
  id:number
  title:string
  body:string
}

class FifteenthTitle {
  static #URL = 'https://jsonplaceholder.typicode.com/posts'
  static #ID = 15

  static #get() {
    fetch(FifteenthTitle.#URL)
      .then(res => {
        if(res.ok){
          return res.json()
        }
      })
      .then(resData => FifteenthTitle.#getTitleFromJson(resData as ResData[] ))
      .then(title => console.log(title))
      .catch(({messege}) => console.error(messege))
  }

  static #getTitleFromJson(resData: ResData[]){

    const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
    const title = itemWithTitle?.title

    return title
  }

  public run(){
    FifteenthTitle.#get()
  }
}

const fifteenthTitle = new FifteenthTitle() 
fifteenthTitle.run()

      