const report = {
    "name": "Pippo",
    "address": "0x5cba1Cb9645CA2fdacF9e9ee44f6C059d75A3b70",
    "binarySource": "608060405260aa60005534801561001557600080fd5b50610184806100256000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b3df200146100515780635bfd987d1461006f578063c2985578146100b1578063febb0f7e146100cf575b600080fd5b6100596100ed565b6040518082815260200191505060405180910390f35b61009b6004803603602081101561008557600080fd5b810190808035906020019092919050505061011d565b6040518082815260200191505060405180910390f35b6100b961012a565b6040518082815260200191505060405180910390f35b6100d761013c565b6040518082815260200191505060405180910390f35b6000806000815480929190600101919050555060aa600054141561011557600054905061011a565b600080fd5b90565b6000816088019050919050565b600061013761cccc61011d565b905090565b600061014961dddd61011d565b90509056fea2646970667358221220e619b234c1887f9b10b567ee21364dbf523a19001c8c47a33049907c0398563164736f6c63430006040033",
    "binaryHash": "68a7ae38",
    "isOnlyRuntime": false,
    "metadata": "a2646970667358221220e619b234c1887f9b10b567ee21364dbf523a19001c8c47a33049907c0398563164736f6c63430006040033",
    "solidityVersion": "0.6.4",
    "constructorRemainingData": "",
    "constructorCfg": {
      "bytecode": "608060405260aa60005534801561001557600080fd5b50610184806100256000396000f3fe",
      "remainingData": "fe",
      "nodes": {
        "0": {
          "length": 17,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "608060405260aa60005534801561001557",
          "parsedOpcodes": "0: PUSH1 0x80\n2: PUSH1 0x40\n4: MSTORE\n5: PUSH1 0xaa\n7: PUSH1 0x00\n9: SSTORE\n10: CALLVALUE\n11: DUP1\n12: ISZERO\n13: PUSH2 0x0015\n16: JUMPI"
        },
        "17": {
          "length": 4,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "600080fd",
          "parsedOpcodes": "17: PUSH1 0x00\n19: DUP1\n20: REVERT"
        },
        "21": {
          "length": 15,
          "type": "fallback",
          "stackBalance": -1,
          "bytecodeHex": "5b50610184806100256000396000f3",
          "parsedOpcodes": "21: JUMPDEST\n22: POP\n23: PUSH2 0x0184\n26: DUP1\n27: PUSH2 0x0025\n30: PUSH1 0x00\n32: CODECOPY\n33: PUSH1 0x00\n35: RETURN"
        },
        "36": {
          "length": 0,
          "type": "exit",
          "stackBalance": 0,
          "bytecodeHex": "",
          "parsedOpcodes": "36: EXIT BLOCK"
        }
      },
      "successors": {
        "0": [
          17,
          21
        ],
        "17": [
          36
        ],
        "21": [
          36
        ],
        "36": []
      },
      "buildReport": {
        "directJumpTargetErrors": 0,
        "orphanJumpTargetNullErrors": 0,
        "orphanJumpTargetUnknownErrors": 0,
        "loopDepthExceededErrors": 0,
        "multipleRootNodesErrors": 0,
        "stackExceededErrors": 0,
        "criticalErrors": 0,
        "errorLog": "",
        "buildTimeMillis": 43
      }
    },
    "runtimeCfg": {
      "bytecode": "608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b3df200146100515780635bfd987d1461006f578063c2985578146100b1578063febb0f7e146100cf575b600080fd5b6100596100ed565b6040518082815260200191505060405180910390f35b61009b6004803603602081101561008557600080fd5b810190808035906020019092919050505061011d565b6040518082815260200191505060405180910390f35b6100b961012a565b6040518082815260200191505060405180910390f35b6100d761013c565b6040518082815260200191505060405180910390f35b6000806000815480929190600101919050555060aa600054141561011557600054905061011a565b600080fd5b90565b6000816088019050919050565b600061013761cccc61011d565b905090565b600061014961dddd61011d565b90509056fe",
      "remainingData": "fe6163636f756e7420697320756e646572636f6c6c61746572616c697a656420616e6420636f6c6c61746572616c697a6174696f6e206465637265617365646163636f756e7420697320756e646572636f6c6c61746572616c697a656420616e6420686173206e6f20706f7369746976652076616c75656163636f756e7420697320756e646572636f6c6c61746572616c697a656420616e6420706f736974696f6e206368616e676564207369676e736163636f756e7420697320756e646572636f6c6c61746572616c697a656420616e64206162736f6c75746520706f736974696f6e2073697a6520696e637265617365646163636f756e7420697320756e646572636f6c6c61746572616c697a656420616e6420776173206e6f742070726576696f75736c79a365627a7a72315820c9fb57d8b32986f2ba9bfc8e97ecdfc45b4f38874ff2ce9a89e81e47f3308c836c6578706572696d656e74616cf564736f6c63430005100040",
      "nodes": {
        "0": {
          "length": 12,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "608060405234801561001057",
          "parsedOpcodes": "0: PUSH1 0x80\n2: PUSH1 0x40\n4: MSTORE\n5: CALLVALUE\n6: DUP1\n7: ISZERO\n8: PUSH2 0x0010\n11: JUMPI"
        },
        "12": {
          "length": 4,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "600080fd",
          "parsedOpcodes": "12: PUSH1 0x00\n14: DUP1\n15: REVERT"
        },
        "16": {
          "length": 10,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b506004361061004c57",
          "parsedOpcodes": "16: JUMPDEST\n17: POP\n18: PUSH1 0x04\n20: CALLDATASIZE\n21: LT\n22: PUSH2 0x004c\n25: JUMPI"
        },
        "26": {
          "length": 17,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "60003560e01c80634b3df2001461005157",
          "parsedOpcodes": "26: PUSH1 0x00\n28: CALLDATALOAD\n29: PUSH1 0xe0\n31: SHR\n32: DUP1\n33: PUSH4 0x4b3df200\n38: EQ\n39: PUSH2 0x0051\n42: JUMPI"
        },
        "43": {
          "length": 11,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "80635bfd987d1461006f57",
          "parsedOpcodes": "43: DUP1\n44: PUSH4 0x5bfd987d\n49: EQ\n50: PUSH2 0x006f\n53: JUMPI"
        },
        "54": {
          "length": 11,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "8063c2985578146100b157",
          "parsedOpcodes": "54: DUP1\n55: PUSH4 0xc2985578\n60: EQ\n61: PUSH2 0x00b1\n64: JUMPI"
        },
        "65": {
          "length": 11,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "8063febb0f7e146100cf57",
          "parsedOpcodes": "65: DUP1\n66: PUSH4 0xfebb0f7e\n71: EQ\n72: PUSH2 0x00cf\n75: JUMPI"
        },
        "76": {
          "length": 5,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "5b600080fd",
          "parsedOpcodes": "76: JUMPDEST\n77: PUSH1 0x00\n79: DUP1\n80: REVERT"
        },
        "81": {
          "length": 8,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "5b6100596100ed56",
          "parsedOpcodes": "81: JUMPDEST\n82: PUSH2 0x0059\n85: PUSH2 0x00ed\n88: JUMP"
        },
        "89": {
          "length": 22,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b6040518082815260200191505060405180910390f3",
          "parsedOpcodes": "89: JUMPDEST\n90: PUSH1 0x40\n92: MLOAD\n93: DUP1\n94: DUP3\n95: DUP2\n96: MSTORE\n97: PUSH1 0x20\n99: ADD\n100: SWAP2\n101: POP\n102: POP\n103: PUSH1 0x40\n105: MLOAD\n106: DUP1\n107: SWAP2\n108: SUB\n109: SWAP1\n110: RETURN"
        },
        "111": {
          "length": 18,
          "type": "dispatcher",
          "stackBalance": 3,
          "bytecodeHex": "5b61009b6004803603602081101561008557",
          "parsedOpcodes": "111: JUMPDEST\n112: PUSH2 0x009b\n115: PUSH1 0x04\n117: DUP1\n118: CALLDATASIZE\n119: SUB\n120: PUSH1 0x20\n122: DUP2\n123: LT\n124: ISZERO\n125: PUSH2 0x0085\n128: JUMPI"
        },
        "129": {
          "length": 4,
          "type": "dispatcher",
          "stackBalance": 0,
          "bytecodeHex": "600080fd",
          "parsedOpcodes": "129: PUSH1 0x00\n131: DUP1\n132: REVERT"
        },
        "133": {
          "length": 22,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b810190808035906020019092919050505061011d56",
          "parsedOpcodes": "133: JUMPDEST\n134: DUP2\n135: ADD\n136: SWAP1\n137: DUP1\n138: DUP1\n139: CALLDATALOAD\n140: SWAP1\n141: PUSH1 0x20\n143: ADD\n144: SWAP1\n145: SWAP3\n146: SWAP2\n147: SWAP1\n148: POP\n149: POP\n150: POP\n151: PUSH2 0x011d\n154: JUMP"
        },
        "155": {
          "length": 22,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b6040518082815260200191505060405180910390f3",
          "parsedOpcodes": "155: JUMPDEST\n156: PUSH1 0x40\n158: MLOAD\n159: DUP1\n160: DUP3\n161: DUP2\n162: MSTORE\n163: PUSH1 0x20\n165: ADD\n166: SWAP2\n167: POP\n168: POP\n169: PUSH1 0x40\n171: MLOAD\n172: DUP1\n173: SWAP2\n174: SUB\n175: SWAP1\n176: RETURN"
        },
        "177": {
          "length": 8,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "5b6100b961012a56",
          "parsedOpcodes": "177: JUMPDEST\n178: PUSH2 0x00b9\n181: PUSH2 0x012a\n184: JUMP"
        },
        "185": {
          "length": 22,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b6040518082815260200191505060405180910390f3",
          "parsedOpcodes": "185: JUMPDEST\n186: PUSH1 0x40\n188: MLOAD\n189: DUP1\n190: DUP3\n191: DUP2\n192: MSTORE\n193: PUSH1 0x20\n195: ADD\n196: SWAP2\n197: POP\n198: POP\n199: PUSH1 0x40\n201: MLOAD\n202: DUP1\n203: SWAP2\n204: SUB\n205: SWAP1\n206: RETURN"
        },
        "207": {
          "length": 8,
          "type": "dispatcher",
          "stackBalance": 1,
          "bytecodeHex": "5b6100d761013c56",
          "parsedOpcodes": "207: JUMPDEST\n208: PUSH2 0x00d7\n211: PUSH2 0x013c\n214: JUMP"
        },
        "215": {
          "length": 22,
          "type": "dispatcher",
          "stackBalance": -1,
          "bytecodeHex": "5b6040518082815260200191505060405180910390f3",
          "parsedOpcodes": "215: JUMPDEST\n216: PUSH1 0x40\n218: MLOAD\n219: DUP1\n220: DUP3\n221: DUP2\n222: MSTORE\n223: PUSH1 0x20\n225: ADD\n226: SWAP2\n227: POP\n228: POP\n229: PUSH1 0x40\n231: MLOAD\n232: DUP1\n233: SWAP2\n234: SUB\n235: SWAP1\n236: RETURN"
        },
        "237": {
          "length": 31,
          "type": "common",
          "stackBalance": 1,
          "bytecodeHex": "5b6000806000815480929190600101919050555060aa600054141561011557",
          "parsedOpcodes": "237: JUMPDEST\n238: PUSH1 0x00\n240: DUP1\n241: PUSH1 0x00\n243: DUP2\n244: SLOAD\n245: DUP1\n246: SWAP3\n247: SWAP2\n248: SWAP1\n249: PUSH1 0x01\n251: ADD\n252: SWAP2\n253: SWAP1\n254: POP\n255: SSTORE\n256: POP\n257: PUSH1 0xaa\n259: PUSH1 0x00\n261: SLOAD\n262: EQ\n263: ISZERO\n264: PUSH2 0x0115\n267: JUMPI"
        },
        "268": {
          "length": 9,
          "type": "common",
          "stackBalance": 0,
          "bytecodeHex": "600054905061011a56",
          "parsedOpcodes": "268: PUSH1 0x00\n270: SLOAD\n271: SWAP1\n272: POP\n273: PUSH2 0x011a\n276: JUMP"
        },
        "277": {
          "length": 5,
          "type": "common",
          "stackBalance": 0,
          "bytecodeHex": "5b600080fd",
          "parsedOpcodes": "277: JUMPDEST\n278: PUSH1 0x00\n280: DUP1\n281: REVERT"
        },
        "282": {
          "length": 3,
          "type": "common",
          "stackBalance": -1,
          "bytecodeHex": "5b9056",
          "parsedOpcodes": "282: JUMPDEST\n283: SWAP1\n284: JUMP"
        },
        "285": {
          "length": 13,
          "type": "common",
          "stackBalance": -1,
          "bytecodeHex": "5b600081608801905091905056",
          "parsedOpcodes": "285: JUMPDEST\n286: PUSH1 0x00\n288: DUP2\n289: PUSH1 0x88\n291: ADD\n292: SWAP1\n293: POP\n294: SWAP2\n295: SWAP1\n296: POP\n297: JUMP"
        },
        "298": {
          "length": 13,
          "type": "common",
          "stackBalance": 3,
          "bytecodeHex": "5b600061013761cccc61011d56",
          "parsedOpcodes": "298: JUMPDEST\n299: PUSH1 0x00\n301: PUSH2 0x0137\n304: PUSH2 0xcccc\n307: PUSH2 0x011d\n310: JUMP"
        },
        "311": {
          "length": 5,
          "type": "common",
          "stackBalance": -2,
          "bytecodeHex": "5b90509056",
          "parsedOpcodes": "311: JUMPDEST\n312: SWAP1\n313: POP\n314: SWAP1\n315: JUMP"
        },
        "316": {
          "length": 13,
          "type": "common",
          "stackBalance": 3,
          "bytecodeHex": "5b600061014961dddd61011d56",
          "parsedOpcodes": "316: JUMPDEST\n317: PUSH1 0x00\n319: PUSH2 0x0149\n322: PUSH2 0xdddd\n325: PUSH2 0x011d\n328: JUMP"
        },
        "329": {
          "length": 5,
          "type": "common",
          "stackBalance": -2,
          "bytecodeHex": "5b90509056",
          "parsedOpcodes": "329: JUMPDEST\n330: SWAP1\n331: POP\n332: SWAP1\n333: JUMP"
        },
        "334": {
          "length": 0,
          "type": "exit",
          "stackBalance": 0,
          "bytecodeHex": "",
          "parsedOpcodes": "334: EXIT BLOCK"
        }
      },
      "successors": {
        "0": [
          12,
          16
        ],
        "12": [
          334
        ],
        "16": [
          26,
          76
        ],
        "26": [
          43,
          81
        ],
        "43": [
          54,
          111
        ],
        "54": [
          65,
          177
        ],
        "65": [
          76,
          207
        ],
        "76": [
          334
        ],
        "81": [
          237,
          237
        ],
        "89": [
          334
        ],
        "111": [
          129,
          133
        ],
        "129": [
          334
        ],
        "133": [
          285,
          285
        ],
        "155": [
          334
        ],
        "177": [
          298,
          298
        ],
        "185": [
          334
        ],
        "207": [
          316,
          316
        ],
        "215": [
          334
        ],
        "237": [
          268,
          277
        ],
        "268": [
          282,
          282
        ],
        "277": [
          334
        ],
        "282": [
          89
        ],
        "285": [
          155,
          311,
          329
        ],
        "298": [
          285,
          285
        ],
        "311": [
          185
        ],
        "316": [
          285,
          285
        ],
        "329": [
          215
        ],
        "334": []
      },
      "buildReport": {
        "directJumpTargetErrors": 0,
        "orphanJumpTargetNullErrors": 0,
        "orphanJumpTargetUnknownErrors": 0,
        "loopDepthExceededErrors": 0,
        "multipleRootNodesErrors": 0,
        "stackExceededErrors": 0,
        "criticalErrors": 0,
        "errorLog": "Errore\nCiao\nNew Line\n\n\n\tTab\n\nCiao\n\nEccomi",
        "buildTimeMillis": 53
      }
    }
  }

export default report