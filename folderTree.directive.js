class folderTreeModuleCtrl {
    /*@ngInject*/
    constructor($scope, SPE_DATA, PackCaptureV2SetService) {
        this.$scope = $scope;
        this.speData = SPE_DATA;
        this.PackCaptureV2SetService = PackCaptureV2SetService;
        
        this.init();
    }
    
    init() {
        // console.log('itemClicked => ', this.itemClicked)
    }
    
    onNodeExpanded (node, ev) {
        node.isExpand = !node.isExpand;
        
        ev.stopPropagation();
    }
    
    getNodeIcon (node) {
        let leaf = this.isLeaf(node);
        if (leaf) return 'icon_leaf';
        return node.isExpand ? 'icon_plus' : 'icon_minus';
    }
    
    isLeaf (node) {
        return !node.children || !node.children.length;
    }
    
    warpCallback (callback, node, ev) {
        (this.$scope.vm[callback] || angular.noop)({
                                                   $item: node,
                                                   $event: ev
                                                   });
    };
}
angular
.module('speAdminApp')
.directive('folderTreeModule', function (RecursionHelper) {
           'ngInject';
           return {
           restrict: 'AE',
           templateUrl: 'views/cleanpipe/policy/folderTree.html',
           scope: {
           treeData: '=',
           isCollapse: '=',
           itemClicked: '&',
           },
           replace: true,
           controllerAs: 'vm',
           bindToController: true,
           controller: folderTreeModuleCtrl,
           compile: function (element) {
           // Use the compile function from the RecursionHelper,
           // And return the linking function(s) which it returns
           return RecursionHelper.compile(element);
           }
           };
           });

