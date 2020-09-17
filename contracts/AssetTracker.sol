pragma solidity ^0.5.0;
 
   contract AssetTracker {
    struct Asset {
    string name;
    string description;
    address manufacturer;
    bool initialized;    
         }
         
    struct tracking {
    address location;
    string uuid;
    uint time;
          }
    
     struct man {
    address location;
    string uuid;
    uint time;
          }      
         
    struct stock {
    address location;
    string uuid;
    uint time;
          } 
    struct whole {
    address location;
    string uuid;
    uint time;
          }
    struct retail {
    address location;
    string uuid;
    uint time;
          }
    struct enduser {
    address location;
    string uuid;
    uint time;
          }
     
    
   
    
    mapping(string => tracking) locations;
    mapping(string => man) manuf;
    mapping(string => stock) Stocks;
    mapping(string => whole) wholes;
    mapping(string => retail) retails;
    mapping(string => enduser) end;
  
    mapping(string  => Asset) private assetStore;

      event AssetCreate(address manufacturer, string uuid, address location);
      event AssetTransfer(address from, address to, string uuid, uint time);
       
      function createAsset(string memory name, string memory description, string memory uuid) public {
      require(!assetStore[uuid].initialized, "Asset With This UUID Already Exists");
        
      assetStore[uuid] = Asset(name, description, msg.sender,true);
      locations[uuid] = tracking(msg.sender, uuid, now);
      emit AssetCreate(msg.sender, uuid, msg.sender);
                }
                
       
      function manu(address to, string memory uuid) public {
         require(locations[uuid].location==msg.sender, "You are Not Authorized to Transfer This Asset");
         
        manuf[uuid]= man(to, uuid, now);
        emit AssetTransfer(msg.sender, to, uuid, now);
               }
               
         function stockhouse(address to, string memory uuid) public {
         require(manuf[uuid].location==msg.sender, "You are Not Authorized to Transfer This Asset");
         
        Stocks[uuid]= stock(to, uuid, now);
        emit AssetTransfer(msg.sender, to, uuid, now);
               }
               
        function wholsaler(address to, string memory uuid) public {
         require(Stocks[uuid].location==msg.sender, "You are Not Authorized to Transfer This Asset");
         
        wholes[uuid]= whole(to, uuid, now);
        emit AssetTransfer(msg.sender, to, uuid, now);
               }
               
               
        function retailer(address to, string memory uuid) public {
         require(wholes[uuid].location==msg.sender, "You are Not Authorized to Transfer This Asset");
         
        retails[uuid]= retail(to, uuid, now);
        emit AssetTransfer(msg.sender, to, uuid, now);
               }
               
        function Customer(address to, string memory uuid) public {
         require(retails[uuid].location==msg.sender, "You are Not Authorized to Transfer This Asset");
         
        end[uuid]= enduser(to, uuid, now);
        emit AssetTransfer(msg.sender, to, uuid, now);
               }
               
               
          function name(string memory uuid)public view returns (string memory) {
 
               return (assetStore[uuid].name);
               
                   }
          function Description(string memory uuid)public view returns (string memory) {
 
               return (assetStore[uuid].description);
               
                   }
            function Owner(string memory uuid)public view returns (address, uint) {
 
               return (assetStore[uuid].manufacturer, locations[uuid].time);
               
            }
                 
            function manus(string memory uuid)public view returns (address, uint) {
 
            return (manuf[uuid].location, manuf[uuid].time);
                  }
            function stocks(string memory uuid)public view returns (address, uint) {
 
            return (Stocks[uuid].location, Stocks[uuid].time);
                  }
            function wholee(string memory uuid)public view returns (address, uint) {
 
            return ( wholes[uuid].location,  wholes[uuid].time);
                  }
            function reta(string memory uuid)public view returns (address, uint) {
 
            return (retails[uuid].location, retails[uuid].time);
                  }
            function Customers(string memory uuid)public view returns (address, uint) {
 
            return ( end[uuid].location, end[uuid].time);
                  }
            
          
       }
