# GreetingsRegistry









## Methods

### messages

```solidity
function messages(address) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### postUpgrade

```solidity
function postUpgrade(string prefix) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| prefix | string | undefined |

### setMessage

```solidity
function setMessage(string message) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| message | string | undefined |



## Events

### MessageChanged

```solidity
event MessageChanged(address indexed user, string message)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| message  | string | undefined |



