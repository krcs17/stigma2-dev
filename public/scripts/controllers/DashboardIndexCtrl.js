define(['./module'],
    function(app) {
        'use strict';

        app.controller('DashboardIndexCtrl', [
            '$scope', '$state',
            function($scope, $state) {
                $scope.tabs = [
                    { title: "General", route: "dashboard.overview", active: true },
                    { title: "GlusterFS", route: "dashboard.glusterfs", active: false }
                ];
            }
        ]);
    }
);