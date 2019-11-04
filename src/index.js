const content = React.createElement(
  'form',
  { className: 'pure-form' },
  React.createElement(
    'fieldset',
    {},
    [
      React.createElement(
        'legend',
        {},
        'A compact inline form'
      ),
      React.createElement(
        'input',
        { type: 'email', placeholder: 'Email' }
      ),
      React.createElement(
        'input',
        { type: 'password', placeholder: 'Password' }
      ),
      React.createElement(
        'button',
        { 
          type: 'submit',
          className: 'pure-button pure-button-primary',
          onClick: (event) => {
            event.preventDefault();
            console.log(event);
          }
         },
        'Sign in'
      )
    ]
  )
)

ReactDOM.render(
  content,
  document.getElementById('root')
)