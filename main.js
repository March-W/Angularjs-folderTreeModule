
class packCaptureV2SetCtrl {
    /*@ngInject*/
    constructor(SPE_DATA, PackCaptureV2SetService) {
        this.speData = SPE_DATA;
        this.PackCaptureV2SetService = PackCaptureV2SetService;
        
        this.mitigationProfile = 'Not Selected';
        this.profileSelectionShow = false;
        this.mitigationProfileShow = false;
        this.isCollapse = false;
        this.otherSelectionShow = false;
        
        this.folderMockData = [
                               {
                               name: 'Site Demo-1',
                               children: [
                                          {
                                          name: '121.122.5.0/24',
                                          children: [
                                                     {
                                                     name: '121.122.5.1/32'
                                                     },
                                                     {
                                                     name: '121.122.5.2/32'
                                                     }
                                                     ]
                                          },
                                          {
                                          name: '79.65.173.0/24',
                                          children: [
                                                     {
                                                     name: '79.65.173.1/24'
                                                     },
                                                     {
                                                     name: '79.65.173.2/24'
                                                     }
                                                     ]
                                          },
                                          {
                                          name: '79.65.172.0/24',
                                          children: []
                                          }
                                          ]
                               },
                               {
                               name: 'Site Demo-2',
                               children: [
                                          {
                                          name: '121.122.122.120/24'
                                          },
                                          {
                                          name: '121.122.122.121/24'
                                          }
                                          ]
                               }
                               ];
        
        this.init();
    }
    
    init() {}
    
    cancelProfileSelect(ev) {
        this.profileSelectionShow = false;
        this.mitigationProfileShow = false;
        
        ev.stopPropagation();
    }
    onProfileSelect(ev) {
        this.profileSelectionShow = true;
        
        ev.stopPropagation();
    }
    
    itemClicked($item, ev) {
        this.selectedItem = $item;
        this.mitigationProfile = $item.name;
        
        ev.stopPropagation();
    }
    
    showFolderTreeModule(ev) {
        this.mitigationProfileShow = !this.mitigationProfileShow;
        
        ev.stopPropagation();
    }
    onSetClick(ev) {
        this.otherSelectionShow = true;
        
        ev.stopPropagation();
    }
    onCancelSetClick(ev) {
        this.otherSelectionShow = false;
        
        ev.stopPropagation();
    }
}
angular
.module('speAdminApp')
.directive('opPacketCaptureSet', function (RecursionHelper) {
           'ngInject';
           return {
           restrict: 'AE',
           templateUrl: 'main.html',
           scope: {},
           replace: true,
           controllerAs: 'vm',
           bindToController: true,
           controller: packCaptureV2SetCtrl,
           compile: function (element) {
           // Use the compile function from the RecursionHelper,
           // And return the linking function(s) which it returns
           return RecursionHelper.compile(element);
           }
           };
           });
