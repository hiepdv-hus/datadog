<template>
  <div class="control">
    <div class="container">
      <h4>Location</h4>
      <div class="columns">
        <div class="column location">
          <div class="i-box-title">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/company.e40abebe.svg"
              />
              <h5 class="pt-2 pl-2">Company</h5>
            </div>
            <div class="d-edit-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
            </div>
            <div class="table-height i-table font-10">
              <div class="i-table-header">
                <table class="table-header">
                  <thead>
                  <tr>
                    <th class="center table-th-td i-cursor" style="width: 15%;"></th>
                    <th class="center table-th-td i-cursor" style="width: 40%;">Name</th>
                    <th class="center table-th-td i-cursor" style="width: 45%;">Contact</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="i-table-row div-height-135 font-10">
                <table class="table-header">
                  <tbody>
                  <tr v-for="item in companys" :key="item.companyId">
                    <td class="center table-th-td i-cursor" style="width: 15%;">
                      <input
                          type="radio"
                          name="answer4"
                          v-model="companyId"
                          :value="item.companyId"
                          @click="clickCompany(item.companyId)"
                      />
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 40%;">
                      {{ item.companyName }}
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 45%;">
                      {{ item.contactName }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="buttonAdd">
              <button class="btn btn-default" @click="modalShow">Add Company</button>
            </div>
          </div>
        </div>

        <div class="column location">
          <div class="i-box-title">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/floors.fe9318ba.svg"
              />
              <h5 class="pt-2 pl-2">Floors</h5>
            </div>
            <div class="d-edit-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
            </div>
            <div class="table-height i-table font-10">
              <div class="i-table-header">
                <table class="table-header">
                  <thead>
                  <tr>
                    <th class="center table-th-td i-cursor" style="width: 15%;"></th>
                    <th class="center table-th-td i-cursor" style="width: 40%;">Name</th>
                    <th class="center table-th-td i-cursor" style="width: 45%;">No. of Rooms</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="i-table-row div-height-135 font-10">
                <table class="table-header">
                  <tbody>
                  <tr v-for="item in floors" :key="item.floorId">
                    <td class="center table-th-td i-cursor" style="width: 15%;">
                      <input
                          type="radio"
                          name="answer1"
                          v-model="floorId"
                          :value="item.floorId"
                          @click="clickFloor(item.floorId)"
                      />
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 40%;">
                      {{ item.floorName }}
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 45%;">
                      {{ item.countRoom }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="buttonAdd">
              <button class="btn btn-default">Add Floor</button>
            </div>
          </div>
        </div>
        <div class="column location">
          <div class="i-box-title">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/rooms.3771f2bf.svg"
              />
              <h5 class="pt-2 pl-2">Rooms</h5>
            </div>
            <div class="d-edit-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
            </div>
            <div class="table-height i-table font-10">
              <div class="i-table-header">
                <table class="table-header">
                  <thead>
                  <tr>
                    <th class="center table-th-td i-cursor" style="width: 45%;">Name</th>
                    <th class="center table-th-td i-cursor" style="width: 55%;">No. of Rooms</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="i-table-row div-height-135 font-10">
                <table class="table-header">
                  <tbody>
                  <tr v-for="item in rooms" :key="item.roomId">
                    <td class="center table-th-td i-cursor" style="width: 45%;">
                      {{ item.roomName }}
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 55%;">
                      {{ item.countDevice }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="buttonAdd">
              <button class="btn btn-default">Add Room</button>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column location">
          <div class="i-box-title">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/buildings.de7d94d7.svg"
              />
              <h5 class="pt-2 pl-2">Buildings</h5>
            </div>
            <div class="d-edit-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
            </div>
            <div class="table-height i-table font-10">
              <div class="i-table-header">
                <table class="table-header">
                  <thead>
                  <tr>
                    <th class="center table-th-td i-cursor" style="width: 15%;"></th>
                    <th class="center table-th-td i-cursor" style="width: 40%;">Name</th>
                    <th class="center table-th-td i-cursor" style="width: 45%;">Location</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="i-table-row div-height-135 font-10">
                <table class="table-header">
                  <tbody>
                  <tr v-for="item in buildings" :key="item.buildingId">
                    <td class="center table-th-td i-cursor" style="width: 15%;">
                      <input
                          type="radio"
                          name="answer"
                          v-model="buildingId"
                          :value="item.buildingId"
                          @click="clickBuilding(item.buildingId)"
                      />
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 40%;">
                      {{ item.buildingName }}
                    </td>
                    <td class="center table-th-td i-cursor" style="width: 45%;">
                      {{ item.address }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="buttonAdd">
              <button class="btn btn-default">Add Building</button>
            </div>
          </div>
        </div>
        <div class="column location">
          <div class="group">
            <div class="i-box-title">
              <div class="title-icon">
                <img
                    src="https://dc7zw0k63rq6r.cloudfront.net/img/groups.a916d30e.svg"
                />
                <h5 class="pt-2 pl-2">Groups</h5>
              </div>
              <div class="d-edit-title">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
              </div>
              <div class="table-height i-table font-10">
                <div class="i-table-header">
                  <table class="table-header">
                    <thead>
                    <tr>
                      <th class="center table-th-td i-cursor" style="width: 45%;">Name</th>
                      <th class="center table-th-td i-cursor" style="width: 55%;">No. of Rooms</th>
                    </tr>
                    </thead>
                  </table>
                </div>
                <div class="i-table-row div-height-135 font-10">
                  <table class="table-header">
                    <tbody>
                    <tr v-for="item in groups" :key="item.groupId">
                      <td class="center table-th-td i-cursor" style="width: 45%;">
                        {{ item.groupName }}
                      </td>
                      <td class="center table-th-td i-cursor" style="width: 55%;">
                        {{ item.countRoom }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="buttonAdd">
                <button class="btn btn-default">Add Group</button>
              </div>
            </div>
          </div>
        </div>
        <div class="column location">
          <div class="i-box-title">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/groups.a916d30e.svg"
              />
              <h5 class="pt-2 pl-2">Application integrations</h5>
            </div>
            <div class="d-edit-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB1ElEQVRYhc3YPVbCQBSG4RelF1egFS14Dr0s4Ba4AnEH7sJlCDvQc25hGXZAWqqwA1kBFpnBJOSfyYSvAcKQ83Dnj2FwPB7pI6r6CCyAERCJyCqv3aAPoKpOgQC4S1wOgbmI/Cbb3nh0AYU4gAkQqOooedErsARnc4b0BqyBs0khvXdxzUyIv0z3k0RVR3bgN6iizVOnFTSgSFWXACKyBebAoe49OgNmqvXZArkRkW0nwIKubIIMiRdx9xWsGGd1kKkF2ymw5iQoQ57tJs6ADWdoHnKTxYGjZabF8mHzVvQjweZi4AU4mxcR+Sp686IudoALzecL0xroCHc25rJpBfSFgxZAnzhoCPSNgwbAPnBQE9gXDmoA+8RBBbBvHJQArwEHBcBrwUHOXmxO/FuuAAc5FRSRCCjcvCviFAcJoKkcACKyBNYN77XHMQ7SFXxX1ZV90RB5ABaucZAGToHXFsgDceW2rnGQBj6bxybITnFggGZZSSYPufGNOwGJDy3ZpJDE59TQPPeCg39gtoI2J6SZAHPg2xcOzEKtqhHwUNJubbrZe25ns9kI+KhoN93tdvfj8fjHByqZIcXduyfe8gIg8NWl2QwNIiT+tz1IgKI+QNn8AQb7IKI4CJBCAAAAAElFTkSuQmCC">
            </div>
            <div class="table-height i-table font-10">
              <div class="i-table-header">
                <table class="table-header">
                  <thead>
                  <tr>
                    <th class="center table-th-td i-cursor" style="width: 40%;">Name</th>
                    <th class="center table-th-td i-cursor" style="width: 30%;">No. of Rooms</th>
                    <th class="center table-th-td i-cursor" style="width: 30%">Water Unit</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="i-table-row div-height-135 font-10">
                <table class="table-header">
                  <tbody>
                  <tr>
                    <td class="center table-th-td i-cursor" style="width: 40%;"></td>
                    <td class="center table-th-td i-cursor" style="width: 30%;"></td>
                    <td class="center table-th-td i-cursor" style="width: 30%;"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="buttonAdd">
              <button class="btn btn-default">Add Integration</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" :class="isActive">
        <div class="modal-background"></div>
        <div class="modal-content">
          <section class="modal-card-body">
            <div class="title-icon">
              <img
                  src="https://dc7zw0k63rq6r.cloudfront.net/img/company.e40abebe.svg"
              />
              <h5 class="pt-2 pl-2">Add Company</h5>
            </div>
            <div class="md-content">
              <div class="pb-b-23">
                <div class="md-row">
                  <h6 style="font-size: 14px"><b>General Information</b></h6>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Company Name</p>
                  </div>
                  <div class="md-input">
                    <input required v-model="student.name" type="text" name="companyName" maxlength="100">
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Contact Person</p>
                  </div>
                  <div class="md-input">
                    <input required v-model="student.contact" type="text" name="companyName" maxlength="100">
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Contact Email</p>
                  </div>
                  <div class="md-input">
                    <input type="text" name="companyName" maxlength="100">
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Contact Phone #</p>
                  </div>
                  <div class="md-input">
                    <div class="input-container">
                      <div class="select is-small is-danger select-phone mr-1">
                        <select>
                          <option></option>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <div class="phoneNumber">
                        <input class="input-phone" type="text" name="companyName" maxlength="100">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Tier</p>
                  </div>
                  <div class="md-input">
                    <div class="select is-small is-danger">
                      <select>
                        <option></option>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="md-content">
              <div class="pb-b-23">
                <div class="md-row">
                  <h6 style="font-size: 14px"><b>Accounts Payable Information</b></h6>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Contact Person</p>
                  </div>
                  <div class="md-input">
                    <input type="text" name="companyName" maxlength="100">
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Email</p>
                  </div>
                  <div class="md-input">
                    <input type="text" name="companyName" maxlength="100">
                  </div>
                </div>
                <div class="md-row">
                  <div class="md-title row-title">
                    <p>Phone #</p>
                  </div>
                  <div class="md-input">
                    <input type="text" name="companyName" maxlength="100">
                  </div>
                </div>
              </div>
            </div>
            <div class="md-footer">
              <button class="btn-button btn-cancel" @click="modeHide">Cancel</button>
              <button class="btn-button btn-submit" @click="handleAdd">Save</button>
            </div>
          </section>
        </div>
      </div>
      <div class="notification is-primary" v-show="notificationShow">
        Thêm Thành Công
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      companys: [],
      companyId: '',
      buildings: [],
      buildingId: '',
      floors: [],
      floorId: '',
      rooms: [],
      roomId: '',
      groups: [],
      student: {
        id: Math.floor(Math.random()*1000),
        name: '',
        contact: ''
      },
      isModalVisible: false,
      isActive: {
        'is-active': false
      },
      notificationShow: false
    };
  },
  methods: {
    getCompany() {
      let token = localStorage.getItem("token")
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          resource_id: "S005V003"
        }
      };

      axios.get("https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/companies", config).then((res) =>{
        this.companys = res.data.data
        this.companyId = this.companys[0].companyId

        let companyId = this.companys[0].companyId
        axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/companies/${companyId}/buildings`, config).then((res) =>{
          this.buildings = res.data.data
          this.buildingId = this.buildings[0].buildingId

          let buildingId = this.buildings[0].buildingId
          axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/floors`, config).then((res) =>{
            this.floors = res.data.data
            this.floorId = this.floors[0].floorId

            let floorId = this.floors[0].floorId
            axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/floors/${floorId}/rooms`, config).then((res) =>{
              this.rooms = res.data.data
            })
          })
          axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/groups`, config).then((res) =>{
            this.groups = res.data.data
          })
        })
      })

    },
    clickCompany(companyId) {
      let token = localStorage.getItem("token")
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          resource_id: "S005V005"
        }
      };

      axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/companies/${companyId}/buildings`, config).then((res) =>{
        this.buildings = res.data.data
        this.buildingId = this.buildings[0].buildingId

        let buildingId = this.buildings[0].buildingId
        axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/floors`, config).then((res) =>{
          this.floors = res.data.data
          this.floorId = this.floors[0].floorId

          let floorId = this.floors[0].floorId
          axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/floors/${floorId}/rooms`, config).then((res) =>{
            this.rooms = res.data.data
          })
        })
        axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/groups`, config).then((res) =>{
          this.groups = res.data.data
        })
      })

      console.log(this.buildings);
    },
    clickBuilding(buildingId) {
      let token = localStorage.getItem("token")
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          resource_id: "S005V005"
        }
      };

      axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/floors`, config).then((res) =>{
        this.floors = res.data.data

        let floorId = this.floors.floorId
        axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/floors/${floorId}/rooms`, config).then((res) =>{
          this.rooms = res.data.data
        })
      })

      axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/buildings/${buildingId}/groups`, config).then((res) =>{
        this.groups = res.data.data
      })
    },
    clickFloor(floorId) {
      let token = localStorage.getItem("token")
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          resource_id: "S005V007"
        }
      };

      axios.get(`https://2twbna5ea6.execute-api.ap-northeast-1.amazonaws.com/test/v1/floors/${floorId}/rooms`, config).then((res) =>{
        this.rooms = res.data.data
      })
    },
    modeHide() {
      this.isActive["is-active"] = false;
    },
    modalShow() {
      this.isActive["is-active"] = true;
    },
    handleAdd() {
      this.companys.push(this.student)
      this.modeHide()
      this.notificationShow = true
      setTimeout(() => this.notificationShow = false, 1500);
    }
  },
  created() {
    this.getCompany()
    // this.buildingSelected = this.buildings.filter((i) => i.company_id == 1);
    // this.floorSelected = this.floors.filter((i) => i.u_id == 1);
    // this.roomSelected = this.rooms.filter((i) => i.floor_id == 1);
    // this.groupSelected = this.groups.filter((i) => i.building_id == 1);
    // this.building = 1
    // this.floor = 1
    // this.company = 1

  },
};
</script>
<style>
.notification.is-primary {
  position: fixed;
  right: 0;
  top: 0;
  margin: 1rem;
  transition: .5s;
  z-index: 10000;
}
.control {
  background: #f8f9fa;
  margin-left: 14%;
  padding: 2rem;
  padding-top: 7rem;
}
.control h4 {
  margin-left: 1.5rem;
  font-size: 24px !important;
}
.location {
  padding: 1rem;
  margin: 2rem;
  width: 100%;
  border-radius: 18px;
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 87.8%, 0.7);
}
.title-icon {
  display: inline-flex;
}
.buttonAdd {
  text-align: right;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 25px;
}
.btn {
  color: #fff;
  white-space: nowrap;
  font-family: Noto Sans,sans-serif!important;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 8px;
  border: none;
  width: 124px;
  height: 41px;
  white-space: normal;
  cursor: pointer;
  margin: 0 10px;
}
.btn-default {
  background-color: #727272;
  opacity: .7;
}
.btn:hover {
  opacity: .9;
}
.d-edit-title {
  position: absolute;
  width: 5%;
  right: 0;
  top: 0;
}
.d-edit-title img {
  float: right;
  margin-top: 12px;
  margin-right: 5px;
}
.i-box-title {
  position: relative;
}
.i-table {
  min-height: 160px;
  margin: 10px auto 20px auto;
  background-color: #f8f9fa;
  padding: 10px 0;
  border-radius: 15px;
}
.table-height {
  height: 200px;
  width: 90%;
  padding: 10px;
}
.i-table-header {
  border-bottom: 1px solid rgb(204, 204, 204);
}
.table-header, .i-table{
  width: 100%;
}
.i-table table td:first-child, .i-table table th:first-child {
  border-left: none;
}
.i-table table td.center, .i-table table th.center {
  text-align: center!important;
  padding: 0!important;
}
.i-table table td, .i-table table th {
  border-left: .5px solid #e0e0e0;
  border-top: none;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  padding-right: 5px;
  height: 40px;
  text-align: center!important;
  vertical-align: middle;
  font-size: 13px;
  font-weight: 400;
}
.div-height-135 {
  max-height: 130px;
  overflow-x: hidden;
}
.i-table .i-table-row {
  position: relative;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f8f9fa!important;
}
.md-content {
  display: block;
  padding: 20px 8%;
}
.md-title {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .005em;
  line-height: 26px;
}
.md-input {
  width: 65%;
}
.modal-content .md-content input {
  width: 360px;
  border-radius: 5px;
  border: 1px solid #e1594d;
  resize: none;
  padding: 5px;
  min-width: 200px;
  height: 22px;
}
.modal-content {
  border-radius: 25px;
}
.modal-card-body {
  overflow-x: hidden;
}
.md-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-bottom: 30px;
}
.modal-content .md-footer {
  text-align: right;
  padding-top: 2rem;
  min-height: 40px;
}
.btn-button {
  color: #fff;
  white-space: nowrap;
  font-family: Noto Sans,sans-serif!important;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 8px;
  border: none;
  width: 124px;
  height: 41px;
  cursor: pointer;
  margin: 0 10px;
}
.btn-cancel {
  background-color: #9e9e9e;
}
.btn-submit {
  opacity: .7;
  background: -webkit-gradient(linear,left top,right top,from(#d41100),to(#f04c27));
  background: linear-gradient(
      90deg,#d41100,#f04c27);
}
.select.is-danger select {
  border-color: #f14668;
  width: 360px;
  height: 22px;
}
.select select {
  max-width: none;
  border-color: #e1594d !important;
  padding-top: 0;
}
.select:not(.is-multiple):not(.is-loading)::after {
  display: none;
}
select {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAARCAYAAADOk8xKAAAACXBIWXMAACE3AAAhNwEzWJ96AAAAr0lEQVQ4jb3VSxXCMBBG4ZsYAAdIoBIQMItawAESKgUJcBIhlUAdUAVhFU45fWRom9zlP4tvOSaEgPe+BhrgTL6eQGOcc0fgBRwyYrHOAlUhDOBkgRboC4GdFZE3cCuA9UBtAUTkDlwzYxcRaW1cMqJfDMAOLxnQH2wE7oyOsElwJ3QSmwU3orPYIrgSXcSS4J9oElOBSlSFqcEEqsYATAhBawLEV1YNpocWWwVu7QOfl0zE/p4H8gAAAABJRU5ErkJggg==) no-repeat 100%;
  background-size: 12px 8px;
  -webkit-appearance: none;
  background-position-x: 98%;
}
.input-container {
  display: inline-flex;
}
.select.is-danger.select-phone select {
  width: 100px;
}
.modal-content .md-content .phoneNumber input {
  width: 255px;
}

@media screen and (max-width: 992px){
  .location {
    width: 86%;
  }
  section.modal-card-body {
    margin-left: 2%;
    border-radius: 25px;
    margin-right: 5%;
  }
  .md-content {
    padding: 0;
  }
  .control {
    margin-left: 20%;
    padding: 0;
    padding-top: 7rem;
  }
}
@media screen and (max-width: 767px){
  section.modal-card-body {
    margin-left: 0;
    border-radius: 0;
    margin-right: 0;
  }
}
</style>