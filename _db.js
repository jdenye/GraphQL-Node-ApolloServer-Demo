let games = [
    {id:"1", title: "Zelda, Tears of the kingdom", platform: ["Switch"]},
    {id:"2", title: "Zues knight", platform: ["PS5", "XBox"]},
    {id:"3", title: "Subway surfer", platform: ["Mobile", "XBos"]},
    {id:"4", title: "Horizon", platform: ["PS5", "XBox"]},
    {id:"5", title: "Gate of Galuoo", platform: ["Mobile", "PS5", "XBox", "PC"]}
]

let authors =[
    {id:"1", name: "MArio", verified: true},
    {id:"2", name: "Gates", verified: true}, 
    {id:"3", name: "Wallison", verified: false},
    {id:"4", name: "luito", verified: true}
]

let reviews = [
    {id:'1', rating:9, content: "lorem ipsum", author_id: "1", game_id:"1"},
    {id:'2', rating:7, content: "loreum", author_id: "3", game_id:"5"},
    {id:'3', rating:10, content: "loripsum", author_id: "2", game_id:"4"},
    {id:'4', rating:8, content: "lorem", author_id: "4", game_id:"1"},
    {id:'5', rating:7, content: "ipsum", author_id: "2", game_id:"2"},
    {id:'6', rating:6, content: "empsum", author_id: "1", game_id:"2"},
    {id:'7', rating:8, content: "loum", author_id: "3", game_id:"3"}
]

const db = {
    games,
    authors,
    reviews,
  };
  
  export default db;
  