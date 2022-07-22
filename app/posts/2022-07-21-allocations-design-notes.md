---
title: MPC allocations – design notes
description: Further details about the new allocations journeys
date: 2022-07-21
---

MPC already has this functionality, introduced when the service was first launched. This work aims to meet a number of the user needs that have come up since then, now that OMIC policy and the service are more embedded in prisons’ way of working.

These notes describe the main allocation journey, as well as the reallocation and co-working POM allocation journey.

Aims of the work:

1. Provide more information about the prisoner, so the HOMD can choose the best POM to work with them
2. Allow the HOMD to compare the workloads of different POMs, so cases can be allocated equitably around the team
3. Be more transparent with some of the rules of the service to make it clearer why we recommend each type of POM

## Allocations

Most of the pages in the prototype are direct replacements for pages currently in the service.

### Make allocations

Prototype link: https://hmpps-moic-prototype.apps.live.cloud-platform.service.justice.gov.uk/allocations/final/make-allocations
Replaces this page in the live service: https://dev.moic.service.justice.gov.uk/prisons/LEI/prisoners/unallocated

#### Main features

* New “Additional information” column showing if a prisoner is returning, new or on recall. Show both values if 2 are true - eg recall and new to the prisoner
* “Days waiting for allocation” on the current page changes to “Working days since entering the prison”. This new count should exclude weekends and bank holidays
* Tier column is new
* “Case owner” on current page changes to “POM role needed” – values should be Supporting (replacing Community) or Responsible (replacing Custody)
* “There are currently…” copy on current page should be removed
* Current header of “Make new allocations” changes to “Make allocations”

### Review case details

Prototype link: https://hmpps-moic-prototype.apps.live.cloud-platform.service.justice.gov.uk/allocations/final/step1-review-case-jack-smith
Replaces this page in the live service: https://dev.moic.service.justice.gov.uk/prisons/LEI/prisoners/G7578GR/staff

#### Main features

* Layout of current page should be reformatted in line with the prototype – main changes include introducing the “at a glance” box and new accordions
* Add risk information at the side of the page. This is dependent on this ticket being completed, which should help developers get a sense of the technical architecture involved in retrieving this data. 
* In Sentence and offence accordion, only display the release dates we have for the prisoner in this format:
⋅⋅* Conditional release date
Actual release date
Parole eligibility date
Tariff expiry date
Home detention curfew actual date
Home detention curfew eligibility date
Sentence expiry
Licence expiry
Post-recall release
Parole review date (soon to be renamed to Target parole hearing date)
Only show the Handover start date field if handover start date is different to Handover completion date
Hide the allocation history link in the More information section if prisoner has no allocation history
Show the name and email of the most recently allocated previous POM – only if if someone has worked on the case before and hide these fields if not
Implement empty state messages according to this doc https://docs.google.com/document/d/1gnIMpDT3XuZAZSKmDM-h7taIIjKw7ojnpm1JipbC578/edit?usp=sharing
The “Change” link in the tier row may shortly be removed for cases that are linked with NDelius. It will form a separate piece of work once this has been confirmed.
We are suggesting to include COM email on this page. We do not currently display this in the service. This should be available from the Community API in the allOffenderManagers endpoint.

Allocate a POM 

Prototype link: https://hmpps-moic-prototype.apps.live.cloud-platform.service.justice.gov.uk/allocations/final/step2-select-pom-jack-smith
Replaces the bottom part of this page in the service: https://dev.moic.service.justice.gov.uk/prisons/LEI/prisoners/G7578GR/staff

Main features:

Sentence underneath “Choose a POM” header should change depending on recommended POM type
Page contains an explanation for the recommendation of which type of POM should be selected. The text for each of the conditions covered in the current logic is as follows:
