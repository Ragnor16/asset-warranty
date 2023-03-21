import React from 'react'
import Table from 'react-bootstrap/Table';
import './Dealer.css'
import Header from './Header'
import Search from './Search.js'
import Box from './Box'

function Dealer() {

  return (
    <body className=' Dealer'>
    <div>
      <br/><br/>

      <h2 className='DL'> Dealers</h2><br/>
    <div className='dealer-s'>
    <Search />
    </div>
    <div className='dealer-btn'>
    <button >Add Dealer</button><br/><br/>
    
    </div>
    <br/><br/><br/>
    <div className='Assettable'>
<div class="limiter">
<div class="container-table100">
<div class="wrap-table100">
<div class="table100">
<table>
<thead>
<tr class="table100-head">
<th class="column1">Dealer ID</th>
<th class="column2">Dealer Name</th>
<th class="column3">Branch</th>
<th class="column4">Email</th>

<th class='column5'>Delete</th>
</tr>
</thead>
<tbody>
<tr>
<td class="column1">2017-09-29 01:22</td>
<td class="column2">200398</td>
<td class="column3">iPhone X 64Gb Grey</td>
<td class="column4">$999.00</td>

<td class="column5"><button>Delete</button></td>
</tr>
<tr>
<td class="column1">2017-09-28 05:57</td>
<td class="column2">200397</td>
<td class="column3">Samsung S8 Black</td>
<td class="column4">$756.00</td>

<td class="column5"><button>Delete</button></td>
</tr>
<tr>
<td class="column1">2017-09-26 05:57</td>
<td class="column2">200396</td>
<td class="column3">Game Console Controller</td>
<td class="column4">$22.00</td>

<td class="column5"><button>Delete</button></td>
</tr>
<tr>
<td class="column1">2017-09-25 23:06</td>
<td class="column2">200392</td>
<td class="column3">USB 3.0 Cable</td>
<td class="column4">$10.00</td>

<td class="column5"><button>Delete</button></td>
</tr>

</tbody>
</table>
</div>
</div>
</div>
</div>
    </div>
</div>
</body>
  )
      
}

export default Dealer
