(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{3314:function(e,a,t){"use strict";t.r(a);var l=t(2),s=t.n(l),n=t(5),r=t(15),o=t(16),p=t(25),c=t(24),m=t(26),i=t(0),u=t.n(i),d=t(3),E=t(18),g=t(13),_=t(83),f=t(19),v=t(6),y=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this))).state={loading:!1},e}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match;this.load(e.params.id)}},{key:"load",value:function(){var e=Object(n.a)(s.a.mark(function e(a){var t,l,n,r,o,p,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,E.a.getProposalById(a);case 3:if(t=e.sent,l=t.data,n=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","","","","getChangeDelegation","getWitness127PayPerBlock"],r=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],v.s)for(o in console.log("data.paramters",l.paramters),l.paramters)l.paramters[o].proposalKey=n[l.paramters[o].key],l.paramters[o].proposalVal=l.paramters[o].value;else for(p in l.paramters)for(c in r)r[c].id==l.paramters[p].key&&(l.paramters[p].proposalKey=r[c].key,l.paramters[p].proposalVal=l.paramters[p].value);this.setState({proposal:l,loading:!1});case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.match,t=e.intl,l=this.state,s=l.proposal,n=l.loading;return u.a.createElement("main",{className:"container header-overlap"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12 "},n?u.a.createElement("div",{className:"card"},u.a.createElement(_.b,null,Object(d.c)("loading_address")," #",a.params.id)):u.a.createElement(i.Fragment,null,u.a.createElement("div",{className:"card list-style-header"},a.params.id&&u.a.createElement("div",{className:"card-body"},u.a.createElement("h5",{className:"card-title m-0"},"# ",a.params.id,"\xa0",Object(d.c)("proposal"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("table",{className:"table m-0"},s&&u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("proposer"),":"),u.a.createElement("td",null,s.proposer.name?u.a.createElement(f.a,{address:s.proposer.address},s.proposer.name):u.a.createElement(f.a,{address:s.proposer.address},s.proposer.address))),u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("proposal_time_of_creation"),":"),u.a.createElement("td",null,u.a.createElement(g.a,{value:Number(s.createTime)}),"\xa0",u.a.createElement(g.e,{value:Number(s.createTime)}),"\xa0")),u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("proposal_time_of_expire"),":"),u.a.createElement("td",null,u.a.createElement(g.a,{value:Number(s.expirationTime)}),"\xa0",u.a.createElement(g.e,{value:Number(s.expirationTime)}),"\xa0")),u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("proposal_content_info"),":"),u.a.createElement("td",null,s&&s.paramters.map(function(e,a){return u.a.createElement("div",null,v.s?u.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_1"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/36e5)," \xa0",u.a.createElement("span",null,t.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_2"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_3"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_4"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",u.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_5"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_6"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_7"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_8"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_9"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",u.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_10"})),u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_12"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B," TRX")),"getExchangeCreateFee"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_13"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_14"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_15"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_16"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_17"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_18"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_19"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):u.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&u.a.createElement("div",{className:"proposal-message"},u.a.createElement("span",null,t.formatMessage({id:"propose_18_1"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_20"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getAllowMultiSign"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_21"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_22"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_23"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal),"/",u.a.createElement("span",null,Object(d.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_24"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,u.a.createElement("span",null,e.proposalVal),"/",u.a.createElement("span",null,Object(d.c)("propose_minute"))):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_25"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_26"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_27"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_28"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_allowed")):u.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getChangeDelegation"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"propose_30"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&u.a.createElement("div",{className:"mt-1"},u.a.createElement("span",null,t.formatMessage({id:"propose_31"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",{className:"col-green"},e.proposalVal/v.B)," \xa0",u.a.createElement("span",null,"TRX"))):u.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_1"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_2"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_3"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_4"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_5"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_6"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?u.a.createElement("span",null,Object(d.c)("propose_activate")):u.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_7"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," ",Object(d.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&u.a.createElement("div",null,u.a.createElement("span",null,t.formatMessage({id:"sun_propose_8"})),u.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),u.a.createElement("span",null,e.proposalVal," %"))))}))),u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("proposal_status"),":"),u.a.createElement("td",null,"PENDING"==s.state&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(d.c)("proposal_voting"))),"DISAPPROVED"==s.state&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(d.c)("proposal_ineffective"))),"APPROVED"==s.state&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(d.c)("proposal_effective"))),"CANCELED"==s.state&&u.a.createElement("div",null,u.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(d.c)("proposal_cancelled"))))),u.a.createElement("tr",null,u.a.createElement("th",null,Object(d.c)("approvers_of_the_proposal"),":"),u.a.createElement("td",null,s.approvals.length,"\xa0",u.a.createElement("span",null,Object(d.b)("total_approving_votes")))),u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("td",null,u.a.createElement("div",{className:"approvers-proposal"},s.approvals.map(function(e,a){return u.a.createElement("span",{key:a,className:"mt-1 approvers-proposal-item"},e.name?u.a.createElement(f.a,{address:e.address},e.name):u.a.createElement(f.a,{address:e.address},e.address))})))))))))))))}}]),a}(u.a.Component);a.default=Object(g.h)(y)}}]);