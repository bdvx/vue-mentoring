<template lang="">
    <span class="switch-field">
        <input type="radio" :id="firstOption" :name="toggleName" value="yes" checked/>
        <label class="toggle-label" :for="firstOption">{{firstOption}}</label>
        <input type="radio" :id="secondOption" :name="toggleName" value="no" />
        <label class="toggle-label" :for="secondOption">{{secondOption}}</label>
    </span>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    firstOption: {
      type: String,
      default: '',
    },
    secondOption: {
      type: String,
      default: '',
    },
    toggleName: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
.switch-field {
	display: flex;
	margin-bottom: 36px;
	overflow: hidden;
}
.switch-field input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch-field label {
	background: rgba(66,66,66, 0.8);
	font-size: 14px;
    font-weight: 300;
    color:white;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
	transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
	background-color: #f65261;
	box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}
#radio-one{
    height: 15px;
    width: 19px;
}
</style>
