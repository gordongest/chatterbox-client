var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
      </div>
    `),

  renderFriend: _.template(`
    <div class="chat">
      <div class="username" style="color:rgb(35, 123, 236)"><%- username %></div>
      <div class="text"><%- text %></div>
    </div>
  `),
};