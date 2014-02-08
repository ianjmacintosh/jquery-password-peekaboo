# jquery-password-peekaboo


This jQuery plugin allows you to temporarily reveal password fields like on Windows 8. It is purposefully agnostic of whatever markup and CSS you choose to use; all it does is add a div next to all the fields you want to give "peekaboo" functionality to, and then make an event listener to connect that field with the "peekaboo" element.

If you would like to see an example of it in action, please see:
http://codepen.io/ianjmacintosh/full/DqCjB

## Usage

`$(passwordInputs).passwordPeekaboo();`

I have included a couple of very basic use cases for you to draw from.

### Example 1-1
Use Case: Your visitors want to be able to reveal all password fields
```
<input type="password" /><br />
<input type="password" />

<script>
// Add a peekaboo <div /> element next to the every password input
$("[type=password]").passwordPeekaboo();
</script>
```

### Example 1-2
Use Case: Your visitors want to be able to see their password with a peekaboo, but never EVER reveal their salary

```
Password: <input type="password" /><br />
Annual Salary: <input type="password" class="peekaboo" />

<script>
// Add a peekaboo <div /> element next to the password element you classified with "peekaboo"
$(".peekaboo").passwordPeekaboo();
</script>
```