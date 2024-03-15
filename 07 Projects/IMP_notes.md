1. form: submission: get/post: to an url/server
	-> so stop it's default behaviour using `e.preventDefault();`

2. form elements value: 
	`height.value`

3. form submission: values are submitted as strings
	`parseInt(height.value)`

4. To make a form i.e input field not take any more values
	`input_field.setAttribute('disabled', '')` i.e in key-value format and in value: we've kept it empty.

5. remove Child: `elem.removeChild(eg: 'last-child')`

6. remove property: `elem.removeAttribute('disabled')`